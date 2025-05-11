import axiosInstance from "@/lib/axios/instance";
import { UserInputLogin } from "@/types/user";

const userUrl = "login";

const verifyUser = async (userData: UserInputLogin) => {
  try {

    const response = await axiosInstance.post(userUrl, userData);
    
    return response;
  
  } catch (error) {
    console.error("API request error:", error);
    return null;
  }
};

export {
  verifyUser,
};