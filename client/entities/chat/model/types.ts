export interface IUser {
  email: string;
  avatar: string;
  _id: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
}
export interface IMessage {
  text: string;
  _id: string;
}
