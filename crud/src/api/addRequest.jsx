import { Api } from "./apiRequest";

export const AddUsers = async (newUser) => {
  try {
    const response = await Api.post("/", newUser);
    if (response.status !== 201) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
