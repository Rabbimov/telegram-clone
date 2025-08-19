import React from "react";
import { FaTelegram } from "react-icons/fa";
import { ModeToggle } from "@/shared/components/mode-toggle";
import State from "@/entities/auth";

const Auth = () => {
  return (
    <div className="container max-w-md h-screen flex justify-center items-center flex-col space-y-4">
      <FaTelegram size={120} className="text-blue-500" />
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold">Telegram</h1>
        <span>
          <ModeToggle />
        </span>
      </div>
      <State />
    </div>
  );
};

export default Auth;
