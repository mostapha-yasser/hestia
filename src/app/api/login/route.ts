
import { NextResponse } from "next/server";
import { UsersModel } from "@/models/users";

export async function POST(request: Request) {
    try {
      const userModel = await UsersModel.getInstance();
      const payload = await request.json();
      const { verified, token, error } = await userModel.verifyUserInRoutes(payload);
      
      if (!verified || !token) {
        return NextResponse.json(
          { error: error || "Authentication failed" },
          { status: 401 }
        );
      }
      
      return NextResponse.json({ verified: true, token });
    } catch (error) {
      console.error("Login error:", error);
      return NextResponse.json(
        { error: "Failed to authenticate user" },
        { status: 500 }
      );
    }
  }
  