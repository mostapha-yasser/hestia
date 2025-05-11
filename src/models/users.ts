import { Collection, Db, ObjectId, WithId } from "mongodb";
import { DBUser, User, UserInput } from "@/types/user";
import { createSession, encrypt } from "@/lib/session";
import { connectToDatabase } from "@/lib/mongodb";

export class UsersModel {
  private collection: Collection<DBUser>;
  private static instance: UsersModel;

  private constructor(db: Db) {
    this.collection = db.collection<DBUser>("users");
  }

  static async getInstance(): Promise<UsersModel> {
    if (!UsersModel.instance) {
      const { db } = await connectToDatabase("main");
      UsersModel.instance = new UsersModel(db);
    }
    return UsersModel.instance;
  }

  async findByEmail(email: string): Promise<User| null> {
    try {
      const User = await this.collection.findOne({ email });
      return User ? this.toResponse(User) : null;
    } catch {
      return null;
    }
  }



  async verifyUserInRoutes(userLoginData: {
    email: string;
    password: unknown;
  }) {
    try {
      const { email, password } = userLoginData;
      const user = await this.findByEmail(email);

      if (!user) {
        return { verified: false, error: " Invalid Email Or Password" };
      }

      const isPasswordValid = password === user.password;

      if (!isPasswordValid) {
        return { verified: false, error: " Invalid Email Or Password" };
      }
      const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

      const payload = {
        userId: user._id,
        expiresAt,
      };

      const token =await encrypt(payload);

      return { verified: true, token }

    } catch {
      return { verified: false,token:null, error: "error to login please try again " };
    }
  }




  async create(UsersData: UserInput) {
    const userInDb=await this.findByEmail(UsersData.email)

    const isEmailAlreadyInDb= !! userInDb
    if(isEmailAlreadyInDb){return {verified:false,message:"This Email Is Already Used",token:null}}
    const now = new Date();
    const dbUser: DBUser = {
      _id: new ObjectId(),
      fullName: UsersData.fullName,
      address: UsersData.address,
      email: UsersData.email,
      password: UsersData.password,
      city: UsersData.city,
      governorate: UsersData.governorate,
      phone: UsersData.phone,
      whatsApp: UsersData.whatsApp,
      createdAt: now,
    };
     await this.collection.insertOne(dbUser);


    const { verified, token } = await this.verifyUserInRoutes({
    email: UsersData.email,
    password: UsersData.password
  });
  
  
  if (verified && token) {
    await createSession(token);
    return {verified: true, message: "Successful To create Session", token};
  } else {
    return {verified: false, message: "Failed to create session", token: null};
  }
}

  

  async initIndexes() {
    await this.collection.createIndex({
      name: "text",
      description: "text",
    });
  }

  private toResponse(dbUsers: WithId<DBUser>): User {
    return {
      _id: dbUsers._id.toString(),
      fullName: dbUsers.fullName,
      address: dbUsers.address,
      email: dbUsers.email,
      password: dbUsers.password,
      city: dbUsers.city,
      governorate: dbUsers.governorate,
      phone: dbUsers.phone,
      whatsApp: dbUsers.whatsApp,
      createdAt: dbUsers.createdAt,
    };
  }
}
