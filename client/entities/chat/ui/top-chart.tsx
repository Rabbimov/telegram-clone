import React, { FC } from "react";
import { IUser } from "../model/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Settings2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Separator } from "@/shared/components/ui/separator";
import Image from "next/image";

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
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"secondary"}>
            <Settings2 />
          </Button>
        </SheetTrigger>
        <SheetContent className="!bg-background max-md:w-full p-2 px-4 overflow-y-scroll sidebar-custom-scrollbar">
          <SheetHeader>
            <SheetTitle />
          </SheetHeader>
          <div className="mx-auto w-1/2 h-36 relative">
            <Avatar className="w-full h-36">
              <AvatarImage
                src={contact?.avatar}
                alt={contact?.email}
                className="object-cover"
              />
              <AvatarFallback className=" text-6xl uppercase">
                {contact?.email?.[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <Separator className="my-2 w-full" />
          <h1 className="text-center capitalize text-xl font-medium">
            {contact?.email}
          </h1>
          <div className="flex flex-col space-y-1">
            {contact?.firstName && (
              <div className="flex items-center gap-1 mt-4">
                <p className="font-spaceGrotesk">First Name: </p>
                <p className="font-spaceGrotesk text-muted-foreground">
                  {contact?.firstName}
                </p>
              </div>
            )}
            {contact?.lastName && (
              <div className="flex items-center gap-1 mt-4">
                <p className="font-spaceGrotesk">Last Name: </p>
                <p className="font-spaceGrotesk text-muted-foreground">
                  {contact?.lastName}
                </p>
              </div>
            )}
            {contact?.bio && (
              <div className="flex items-center gap-1 mt-4">
                <p className="font-spaceGrotesk">
                  About:{" "}
                  <span className="font-spaceGrotesk text-muted-foreground">
                    {contact?.bio}
                  </span>
                </p>
              </div>
            )}
            <Separator className="my-2" />
            <div className="flex flex-col space-y-2">
              <div className="w-full h-36 relative">
                <Image
                  src={"https://github.com/shadcn.png"}
                  alt={"https://github.com/shadcn.png"}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TopChart;
