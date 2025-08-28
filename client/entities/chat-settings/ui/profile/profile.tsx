import React, { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Separator } from "@/shared/components/ui/separator";
import { Button } from "@/shared/components/ui/button";
import { Upload } from "lucide-react";
import InformationForm from "../profile-forms/information.from";
import EmailForm from "../profile-forms/email.from";
import NotificationForm from "../profile-forms/notification.from";
import DangerZoneForm from "../profile-forms/danger-zone.from";

interface Props {
  isProfile: boolean;
  setIsProfile: (isProfile: boolean) => void;
}

const Profile: FC<Props> = ({ isProfile, setIsProfile }) => {
  return (
    <Sheet open={isProfile} onOpenChange={setIsProfile}>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-2" />
        <div className="mx-auto w-1/2 h-36 relative">
          <Avatar className="w-full h-36">
            <AvatarFallback className="text-6xl uppercase ">
              {"SB"}
            </AvatarFallback>
          </Avatar>
          <Button size={"icon"} className="absolute right-0 bottom-0">
            <Upload size={16} />
          </Button>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-secondary px-2">
              Base information
            </AccordionTrigger>
            <AccordionContent className="px-2 my-2">
              <InformationForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-secondary px-2">
              Email
            </AccordionTrigger>
            <AccordionContent className="px-2 my-2">
              <EmailForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-secondary px-2">
              Notification
            </AccordionTrigger>
            <AccordionContent className="px-2 my-2">
              <NotificationForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-secondary px-2">
              Danger Zone
            </AccordionTrigger>
            <AccordionContent className="px-2 my-2">
              <DangerZoneForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default Profile;
