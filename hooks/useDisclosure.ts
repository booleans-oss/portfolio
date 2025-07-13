import { useCallback, useState } from "react";

type UseDisclosureProps = {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export default function useDisclosure({
  defaultIsOpen = false,
  onOpen: onOpenProp,
  onClose: onCloseProp,
}: UseDisclosureProps = {}) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    onOpenProp?.();
  }, [onOpenProp]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    onCloseProp?.();
  }, [onCloseProp]);

  const toggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);

  return [isOpen, toggle] as const;
}
