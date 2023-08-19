import { Dispatch, SetStateAction } from "react";


export function toggleMobileMenu(
  isMobileMenu: boolean,
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>
) {
  setIsMobileMenu(!isMobileMenu);
}
