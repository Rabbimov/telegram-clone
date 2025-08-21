"use client";
import ContactList from "@/entities/chat";
import { useCurrentContact } from "@/entities/chat/model/store";
import { AddContact } from "@/entities/chat/ui/add-contact";
import Chat from "@/entities/chat/ui/chat";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

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
        {currentContact?._id && <Chat />}
      </div>
    </>
  );
};

const contactData = [
  { _id: "1", email: "edo@gmail.com", avatar: "https://github.com/shadcn.png" },
  { _id: "2", email: "samar@gmail.com", avatar: "/" },
  { _id: "3", email: "bayramali@gmail.com", avatar: "/" },
  { _id: "4", email: "kamol@gmail.com", avatar: "/" },
  { _id: "5", email: "siddiq@gmail.com", avatar: "/" },
];

export default Page;
