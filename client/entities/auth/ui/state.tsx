"use client";
import { useAuth } from "../model/store";
import SignIn from "./sign-in";
import Social from "./social";
import Verify from "./verify";

const State = () => {
  const { step } = useAuth();
  return (
    <>
      {step === "login" && <SignIn />}
      {step === "verify" && <Verify />}
      <Social />
    </>
  );
};
export default State;
