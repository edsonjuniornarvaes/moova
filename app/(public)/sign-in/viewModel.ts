import { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";

export function useSignInViewModel() {
  const { isLoaded, setActive, signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    if (!isLoaded) return;

    try {
      const signinUser = await signIn.create({
        identifier: email,
        password: password,
      });

      await setActive({ session: signinUser.createdSessionId });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
}

