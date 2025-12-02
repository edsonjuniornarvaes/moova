import { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";

export function useRegisterViewModel() {
  const { isLoaded, setActive, signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingEmailCode, setPendingEmailCode] = useState(false);
  const [code, setCode] = useState("");

  async function handleSignUp() {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingEmailCode(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleVerifyUser() {
    if (!isLoaded) return;

    try {
      const completeSignup = await signUp?.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignup.createdSessionId });
    } catch (e) {
      console.log(e);
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    pendingEmailCode,
    code,
    setCode,
    handleSignUp,
    handleVerifyUser,
  };
}

