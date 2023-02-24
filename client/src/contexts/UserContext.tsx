import React, { createContext, useContext, useState } from "react";
import { fetchAllUsers } from "../services/userService";

import { User, UserContextType } from "../types/user";

export const UserContext = createContext<UserContextType | null>(null);

type props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const getAllUsers = () => {
    fetchAllUsers()
      .then((response: any) => {
        setUsers(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilteredUsers = () => {};

  const values: UserContextType = {
    users,
    setUsers,
    getAllUsers,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext) as UserContextType;
