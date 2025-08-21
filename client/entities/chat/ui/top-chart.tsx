import React, { FC } from "react";
import { IUser } from "../model/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Settings2 } from "lucide-react";

interface Props {
  contact: IUser | null;
}

const TopChart: FC<Props> = ({ contact }) => {
  return (
    <div className="w-full flex items-center p-2 justify-between sticky top-0 z-50 min-h-[6vh] border-b bg-background">
      <div className="flex items-center">
        {" "}
        <Avatar className="z-40">
          <AvatarImage
            src={contact?.avatar}
            alt={contact?.email}
            className="object-cover"
          />
          <AvatarFallback className=" uppercase">
            {contact?.email?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <h2 className="text-sm font-medium capitalize">
            {contact?.email?.split("@")[0]}
          </h2>
          {/* IsTyping */}
          {/* <div className="text-xs flex items-center gap-1 text-muted-foreground">
            <p className="text-secondary-foreground animate-pulse line-clamp-1">
              Hello world
            </p>
            <div className="self-end mb-1">
              <div className="flex justify-center items-center gap-1">
                <div className="w-1 h-1 bg-secondary-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1 h-1 bg-secondary-foreground rounded-full animate-bounce [animation-delay:-0.10s]"></div>
                <div className="w-1 h-1 bg-secondary-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              </div>
            </div>
                  </div> */}
          {/* Is Online */}
          <p className="text-xs flex gap-1">
            <span className="text-xl text-green-500 leading-3">●</span> Online
            {/* <span className="text-xl text-muted-foreground leading-3">●</span>{" "}
            Last seen recently */}
          </p>
        </div>
      </div>
      <Button size={"icon"} variant={"secondary"}>
        <Settings2 />
      </Button>
    </div>
  );
};

export default TopChart;
