import { useUser } from "@clerk/clerk-expo";

export function useHomeViewModel() {
  const { user } = useUser();

  return {
    userEmail: user?.emailAddresses[0].emailAddress,
  };
}

