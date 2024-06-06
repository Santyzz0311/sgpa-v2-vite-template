import { STATUS_CODE } from "@utils/enums/statusCodes";
import { UserCredentials, UserResponse } from "@utils/types";
import axios from "axios";

export const postUserCredentials = async ({ email, password }: UserCredentials): Promise<UserResponse> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_AUTH_API_PREFIX_URL}/login`,
      { email, password }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
        throw new Error('Invalid email or password');
      }
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
