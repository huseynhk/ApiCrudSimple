import { useState, useEffect } from "react";
import { GetUsers } from "../api/getRequest";

const useGetUser = () => {
  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    const response = await GetUsers();
    setUser(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { user, fetchUsers };
};

export default useGetUser;
