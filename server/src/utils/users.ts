import { IUser } from "../types";

const activeUsers: Array<IUser> = [];

const connectUser = (user: IUser): Array<IUser> => {
  const existingUser = activeUsers.find(
    (actUser) => actUser.name === user.name && actUser.email === user.email
  );

  if (!existingUser) {
    activeUsers.push(user);
  }

  return activeUsers;
};

const disconnectUser = (id: string): Array<IUser> => {
  const index = activeUsers.findIndex((user) => user.id === id);

  if (index !== -1) activeUsers.splice(index, 1);
  return activeUsers;
};

export { connectUser, disconnectUser };
