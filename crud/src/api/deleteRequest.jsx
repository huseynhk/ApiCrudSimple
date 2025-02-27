import { Api } from "./apiRequest";

export const DeleteUser = async (userId) => {
  try {
    const response = await Api.delete(`/${userId}`);
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
