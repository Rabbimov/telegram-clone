import React from "react";
import TopChart from "./top-chart";
import { useCurrentContact } from "../model/store";
import ChatLoading from "@/shared/components/loaders/chat.loading";

const Chat = () => {
  const { currentContact } = useCurrentContact();

  return (
    <>
      <TopChart contact={currentContact} />
      <div className="flex flex-col justify-end z-40 min-h-[92vh]">
        {/* Chat Loading*/}
        <ChatLoading />
        {/* Messages */}
        {/* Message input */}
      </div>
    </>
  );
};

export default Chat;
