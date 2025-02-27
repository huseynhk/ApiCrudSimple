import { Api } from "./apiRequest";

export const EditUsers = async (userId, editedData) => {
  try {
    const request = await Api.put(`/${userId}`, editedData);
    if (request.status !== 200) {
      throw new Error("Error");
    } else {
      return request.data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
