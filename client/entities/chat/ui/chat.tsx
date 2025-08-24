import React, { FC } from "react";
import TopChart from "./top-chart";
import { useCurrentContact } from "../model/store";
// import ChatLoading from "@/shared/components/loaders/chat.loading";
import MessageInput from "./message-input";
import MessageCard from "./message-card";
import { IMessage } from "../model/types";
import { messageSchema } from "@/shared/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
interface Props {
  messages: IMessage[];
}

const Chat: FC<Props> = ({
  messages,
}: {
  messages: { _id: string; text: string }[];
}) => {
  const { currentContact } = useCurrentContact();
  const onSendMessage = (values: z.infer<typeof messageSchema>) => {
    // API call to backend
    console.log("message: ", values);
  };

  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      text: "",
      image: "",
    },
  });

  return (
    <>
      <TopChart contact={currentContact} />
      <div className="flex flex-col justify-end z-40 min-h-[94vh]">
        {/* Chat Loading*/}
        {/* <ChatLoading /> */}
        {/* Start conversation */}
        <div className="w-full h-[88vh] flex items-center justify-center">
          <div
            className="text-[100px] cursor-pointer"
            onClick={() => onSendMessage({ text: "👋" })}
          >
            👋
          </div>
        </div>
        {/* Messages */}
        {/* {messages.map((message) => {
          return (
            <MessageCard key={message._id} text={message.text} isReceived />
          );
        })} */}
        {/* Message input */}
        <MessageInput messageForm={messageForm} onSendMessage={onSendMessage} />
      </div>
    </>
  );
};

export default Chat;
