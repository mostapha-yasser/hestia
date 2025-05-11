import axiosInstance from "@/lib/axios/instance";
import { UserInput } from "@/types/user";

const userUrl = "registration";

const addUser = async (userData: UserInput) => {
  try {

    const response = await axiosInstance.post(userUrl, userData);
    
    return response;
  
  } catch (error) {
    console.error("API request error:", error);
    return null;
  }
};

export {
  addUser,
};