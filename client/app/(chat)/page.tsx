"use client";
import ContactList from "@/entities/chat";
import { useCurrentContact } from "@/entities/chat/model/store";
import { AddContact } from "@/entities/chat/ui/add-contact";
import Chat from "@/entities/chat/ui/chat";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { fi } from "zod/locales";

const Page = () => {
  const router = useRouter();
  const { currentContact } = useCurrentContact();

  useEffect(() => {
    router.replace("/");
  }, []);

  return (
    <>
      <div className="w-80 h-screen border-r fixed insert-0 z-50">
        {/* Loading */}
        {/* <div className="w-full h-[95vh] flex justify-center items-center">
          <Loader2 size={50} className=" animate-spin" />
        </div> */}
        {/* Contact list */}
        <ContactList contacts={contactData} />
      </div>
      <div className="pl-80 w-full">
        {/* Add Contact */}
        {!currentContact?._id && <AddContact />}
        {/* Chat Area */}
        {currentContact?._id && <Chat messages={messages} />}
      </div>
    </>
  );
};

const contactData = [
  {
    _id: "1",
    email: "edo@gmail.com",
    avatar: "https://github.com/shadcn.png",
    firstName: "Edo",
    lastName: "Shad",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores vitae nostrum similique magni. Nesciunt, voluptates adipisci. Ex atque voluptate et, harum, ea expedita sed repudiandae quod saepe aperiam quis!",
  },
  {
    _id: "2",
    email: "samar@gmail.com",
    avatar: "/",
    firstName: "Samar",
    lastName: "Ali",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores vitae nostrum similique magni. Nesciunt, voluptates adipisci. Ex atque voluptate et, harum, ea expedita sed repudiandae quod saepe aperiam quis!",
  },
  {
    _id: "3",
    email: "bayramali@gmail.com",
    avatar: "/",
    firstName: "Bayram",
    lastName: "Ali",
  },
  {
    _id: "4",
    email: "kamol@gmail.com",
    avatar: "/",
    firstName: "Kamol",
    lastName: "Ali",
  },
  {
    _id: "5",
    email: "siddiq@gmail.com",
    avatar: "/",
    firstName: "Siddiq",
    lastName: "Ali",
  },
];
const messages = [
  { _id: "1", text: "Hello world" },
  { _id: "2", text: "My work" },
  { _id: "3", text: "I send you Hello" },
  { _id: "4", text: "go" },
];

export default Page;
