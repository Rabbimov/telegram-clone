import ContactList from "@/entities/chat";
import { Loader2 } from "lucide-react";
import React from "react";

const Chat = () => {
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
      {/* Chat Area */}
      <div className="pl-80 w-full">
        {/* {Add Contact} */}

        {/* Chat */}
      </div>
    </>
  );
};

const contactData = [
  { _id: "1", email: "edo@gmail.com", avatar: "https://github.com/shadcn.png" },
  { _id: "2", email: "samar@gmail.com", avatar: "" },
  { _id: "3", email: "bayramali@gmail.com", avatar: "" },
  { _id: "4", email: "kamol@gmail.com", avatar: "" },
  { _id: "5", email: "siddiq@gmail.com", avatar: "" },
];

export default Chat;
