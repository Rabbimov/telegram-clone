// import { CONST } from '@/lib/constants'
// import { IMessage } from '@/types'
// import { format } from 'date-fns'
import {
  Check,
  CheckCheck,
  CheckCheckIcon,
  CheckIcon,
  Edit2,
  Trash,
} from "lucide-react";
import { FC } from "react";

import Image from "next/image";
import { useCurrentContact } from "../model/store";
import { cn } from "@/shared/lib/utils";

interface Props {
  isReceived?: boolean;
  text?: string;
  //   onReaction: (reaction: string, messageId: string) => Promise<void>;
  //   onDeleteMessage: (messageId: string) => Promise<void>;
}
const MessageCard: FC<Props> = ({ isReceived, text }) => {
  const { currentContact } = useCurrentContact();

  const reactions = ["👍", "😂", "❤️", "😍", "👎"];

  return (
    <div
      className={cn(
        "m-2.5 font-medium text-xs flex",
        isReceived ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative inline p-2 pl-2.5 pr-12 max-w-full",
          isReceived ? "bg-primary" : "bg-secondary"
        )}
      >
        <p className="text-sm text-white">{text}</p>
        <div className="right-1 bottom-0 absolute opacity-60 text-[9px] flex gap-[3px]">
          <p>1:00</p>
          <div className="self-end">
            <CheckIcon size={12} />
            {/* <CheckCheckIcon size={12} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
