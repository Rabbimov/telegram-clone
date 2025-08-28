import { Profile } from "@/entities/chat-settings";
import { Button } from "@/shared/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";

import { Switch } from "@/shared/components/ui/switch";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  LogIn,
  Menu,
  Moon,
  Settings2,
  Sun,
  UserPlus,
  VolumeOff,
} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Settings = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isProfile, setIsProfile] = React.useState(false);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size={"icon"} variant={"secondary"}>
            <Menu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-80">
          <h2 className="pt-2 pl-2 text-muted-foreground">
            Setting: rabbimov.uic.local
          </h2>
          <Separator className="my-2" />
          <div className="flex flex-col">
            <div
              className="flex justify-between items-center p-2 hover:bg-secondary cursor-pointer"
              onClick={() => setIsProfile(true)}
            >
              <div className="flex items-center gap-1">
                <Settings2 size={16} />
                <span className="text-sm">Profile</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-secondary cursor-pointer">
              <div className="flex items-center gap-1">
                <UserPlus size={16} />
                <span className="text-sm">Create contact</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-secondary cursor-pointer">
              <div className="flex items-center gap-1">
                <VolumeOff size={16} />
                <span className="text-sm">Mute</span>
              </div>
              <Switch />
            </div>
            <div className="flex justify-between items-center p-2 hover:bg-secondary cursor-pointer">
              <div className="flex items-center gap-1">
                {resolvedTheme === "dark" ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
                <span className="text-sm">Mode theme</span>
              </div>
              <Switch
                checked={resolvedTheme === "dark"}
                onCheckedChange={() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark");
                }}
              />
            </div>
            <div className="flex justify-between items-center p-2 bg-destructive cursor-pointer">
              <div className="flex items-center gap-1">
                <LogIn size={16} />
                <span className="text-sm">Logout</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Profile isProfile={isProfile} setIsProfile={setIsProfile} />
    </>
  );
};

export default Settings;
