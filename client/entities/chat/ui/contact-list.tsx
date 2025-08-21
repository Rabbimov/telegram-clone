"use client";
import React, { FC } from "react";
import { IUser } from "../model/types";
import Settings from "./settings";
import { Input } from "@/shared/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useCurrentContact } from "../model/store";
import { cn } from "@/shared/lib/utils";
interface Props {
  contacts: IUser[];
}

const ContactList: FC<Props> = ({ contacts }) => {
  const router = useRouter();
  const { currentContact, setCurrentContact } = useCurrentContact();
  const renderContact = (contact: IUser) => {
    const onChat = () => {
      if (currentContact?._id === contact._id) return;

      setCurrentContact(contact);

      router.push(`/?chat=${contact._id}`);
    };

    return (
      <div
        key={contact._id}
        onClick={onChat}
        className={cn(
          "flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2",
          currentContact?._id === contact._id && "bg-secondary/50"
        )}
      >
        <div className=" flex items-center gap-2">
          <div className="relative">
            <Avatar>
              <AvatarImage
                src={contact.avatar}
                alt={contact.email}
                className="object-cover"
              />
              <AvatarFallback>{contact.email?.[0]}</AvatarFallback>
            </Avatar>
            <div className="size-3 bg-green-500 absolute rounded-full  bottom-0 right-0 !z-50" />
          </div>
          <div>
            <h2 className="text-sm capitalize line-clamp-1">
              {contact.email.split("@")[0]}
            </h2>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {"No message yet"}
            </p>
          </div>
        </div>
        <div className="self-end">
          <p className="text-xs text-muted-foreground"> 19:20 pm</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center bg-background pl-2 sticky top-0">
        <Settings />
        <div className="m-2 w-full">
          <Input className="bg-secondary" type="text" placeholder="Search..." />
        </div>
      </div>
      {/* C ontacts */}
      {contacts.length === 0 && (
        <div className="w-full h-[95vh] flex justify-center items-center text-center text-muted-foreground">
          <p>Contact list is empty</p>
        </div>
      )}
      {contacts.map(renderContact)}
    </div>
  );
};

export default ContactList;
