import { useState } from "react";
import { useUser } from "@clerk/clerk-expo";

export function useProfileViewModel() {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");

  async function handleUpdateProfile() {
    try {
      const result = await user?.update({
        firstName: firstName,
        lastName: lastName,
      });
      console.log("USUARIO ATUALIZADO: ", result);
    } catch (err) {
      console.log("ERRO AO ATUALIZAR: ", err);
    }
  }

  return {
    user,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    handleUpdateProfile,
  };
}

