import { useState } from "react";
import { IUser } from "./types";

export const useCurrentContact = () => {
  const [currentContact, setCurrentContact] = useState<IUser | null>(null);
  return { currentContact, setCurrentContact };
};
