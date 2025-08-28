import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import { confirmTextSchema } from "@/shared/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const DangerZoneForm = () => {
  const form = useForm<z.infer<typeof confirmTextSchema>>({
    resolver: zodResolver(confirmTextSchema),
    defaultValues: { confirmText: "" },
  });
  const onSubmit = (data: z.infer<typeof confirmTextSchema>) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <>
      <p className="text-xs text-muted-foreground text-center">
        Are you sure you want to delete your account? This action cannot be
        undone.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="mt-2 w-full font-spaceGrotesk font-bold"
            variant={"destructive"}
          >
            Delete permenantly
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="confirmText"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription>
                      Please type <span className="font-bold">DELETE</span> to
                      confirm.
                    </FormDescription>
                    <FormControl>
                      <Input className="bg-secondary" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <Button className="w-full font-bold">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DangerZoneForm;
