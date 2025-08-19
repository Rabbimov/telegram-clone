import { Button } from "@/shared/components/ui/button";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <Button variant={"secondary"}>
        <span>Sign up with google</span>
        <FaGoogle />
      </Button>
      <Button variant={"outline"}>
        <span>Sign up with github</span>
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;
