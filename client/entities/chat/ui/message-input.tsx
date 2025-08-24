import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { messageSchema } from "@/shared/lib/validation";

import { Paperclip, Send, Smile } from "lucide-react";
import React, { FC, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { useTheme } from "next-themes";
interface Props {
  messageForm: UseFormReturn<z.infer<typeof messageSchema>>;
  onSendMessage: (values: z.infer<typeof messageSchema>) => void;
}

const MessageInput: FC<Props> = ({ messageForm, onSendMessage }) => {
  const { resolvedTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    const input = inputRef.current;
    if (!input) return;

    const text = messageForm.getValues("text") || "";
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const newText = text.slice(0, start) + emojiData.emoji + text.slice(end);
    messageForm.setValue("text", newText, { shouldValidate: true });
    setTimeout(() => {
      input.setSelectionRange(
        start + emojiData.emoji.length,
        start + emojiData.emoji.length
      );
    }, 0);
  };

  return (
    <Form {...messageForm}>
      <form
        onSubmit={messageForm.handleSubmit(onSendMessage)}
        className="w-full flex relative"
      >
        <Button
          size={"icon"}
          type="button"
          className="rounded-none cursor-pointer"
          variant={"secondary"}
        >
          <Paperclip />
        </Button>
        <FormField
          control={messageForm.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Type a message"
                  value={field.value}
                  className="bg-secondary rounded-none border-l border-l-muted-foreground border-r border-r-muted-foreground resize-none h-9 sidebar-custom-scrollbar"
                  ref={inputRef}
                  onChange={(e) => {
                    field.onChange(e);
                    // onTypingMessage(e)
                    if (e.target.value === "") {
                      // setMessage(null);
                    }
                  }}
                  onBlur={() => field.onBlur()}
                  // ref={messageInputRef}
                  // disabled = {isCreating}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size={"icon"}
              className="rounded-none cursor-pointer"
              type="button"
              variant={"secondary"}
            >
              <Smile />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 border-none absolute right-6 bottom-0">
            {" "}
            <EmojiPicker
              theme={resolvedTheme === "dark" ? Theme.DARK : Theme.LIGHT}
              onEmojiClick={(emojiData) => handleEmojiSelect(emojiData)}
            />
          </PopoverContent>
        </Popover>

        <Button
          size={"icon"}
          className="rounded-none cursor-pointer"
          type="submit"
          variant={"secondary"}
        >
          <Send />
        </Button>
      </form>
    </Form>
  );
};

export default MessageInput;
