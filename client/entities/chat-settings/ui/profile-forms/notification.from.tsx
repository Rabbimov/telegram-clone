import { Button } from "@/shared/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import useAudio from "@/shared/hooks/use-sound";
import { SOUNDS } from "@/shared/lib/constants";
import { cn, getSoundLabel } from "@/shared/lib/utils";
import { ChevronDown, Ghost, PlayCircle } from "lucide-react";
import React, { useState } from "react";

const NotificationForm = () => {
  const [isNotification, setIsNotification] = useState(false);
  // const [isSounding, setIsSounding] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const { playSound } = useAudio();
  const onPlaySound = (value: string) => {
    setSelectedSound(value);
    playSound(value);
    console.log("sound", value);
  };
  return (
    <>
      <div className="flex items-center justify-between relative">
        <div className="flex flex-col">
          <p className="font-spaceGrotesk">Notification Sound</p>
          <p className="font-spaceGrotesk text-muted-foreground text-xs">
            {getSoundLabel(selectedSound || undefined)}
          </p>
        </div>

        <Popover open={isNotification} onOpenChange={setIsNotification}>
          <PopoverTrigger asChild>
            <Button size={"sm"}>
              Select <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 absolute -right-12">
            <div className="flex flex-col space-y-1">
              {SOUNDS.map((sound) => (
                <div
                  className={cn(
                    "flex justify-between items-center bg-secondary cursor-pointer hover:bg-primary-foreground",
                    selectedSound === sound.value && "bg-primary-foreground"
                  )}
                  key={sound.label}
                  onClick={() => onPlaySound(sound.value)}
                >
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="justify-start"
                  >
                    {sound.label}
                  </Button>
                  {selectedSound === sound.value ? (
                    <Button size={"icon"}>
                      <Ghost />
                    </Button>
                  ) : (
                    <Button size={"icon"} variant={"ghost"}>
                      <PlayCircle />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Button
              className="w-full mt-2 font-bold"
              // onClick={() => mutat({ notificationSound: selectedSound })}
            >
              Submit
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      {/* <Separator className="my-3" />
      <div className="flex items-center justify-between relative">
        <div className="flex flex-col">
          <p className="font-spaceGrotesk">Sending Sound</p>
          <p className="font-spaceGrotesk text-muted-foreground text-xs">
            {getSoundLabel(sound.selectedSound || undefined)}
          </p>
        </div>

        <Popover open={isSounding} onOpenChange={setIsSounding}>
          <PopoverTrigger asChild>
            <Button size={"sm"}>
              Select <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 absolute -right-12">
            <div className="flex flex-col space-y-1">
              {SOUNDS.map((sound) => (
                <div
                  className={cn(
                    "flex justify-between items-center bg-secondary cursor-pointer hover:bg-primary-foreground",
                    selectedSound === sound.value && "bg-primary-foreground"
                  )}
                  key={sound.label}
                  onClick={() => onPlaySound(sound.value)}
                >
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="justify-start"
                  >
                    {sound.label}
                  </Button>
                  {session?.currentUser?.sendingSound === sound.value ? (
                    <Button size={"icon"}>
                      <Ghost />
                    </Button>
                  ) : (
                    <Button size={"icon"} variant={"ghost"}>
                      <PlayCircle />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Button
              className="w-full mt-2 font-bold"
              onClick={() => mutate({ sendingSound: selectedSound })}
            >
              Submit
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <Separator className="my-3" />
      <div className="flex items-center justify-between relative">
        <div className="flex flex-col">
          <p>Mode Mute</p>
          <p className="text-muted-foreground text-xs">
            {!session?.currentUser?.muted ? "Muted" : "Unmuted"}
          </p>
        </div>
        <Switch
          checked={!session?.currentUser?.muted}
          onCheckedChange={() =>
            mutate({ muted: !session?.currentUser?.muted })
          }
        />
      </div> */}
    </>
  );
};

export default NotificationForm;
