import { useState } from "react";

export function useCollapsibleViewModel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((value) => !value);
  };

  return {
    isOpen,
    toggle,
  };
}

