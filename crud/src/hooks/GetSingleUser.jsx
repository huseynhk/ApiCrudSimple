import { useState, useEffect } from "react";
import { GetSingleUser } from "../api/getRequest";

const useFetchUser = (userId) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await GetSingleUser(userId);
    setUser(response);
  };
  useEffect(() => {
    fetchUser();
  }, [userId]);

  return { user };
};

export default useFetchUser;
