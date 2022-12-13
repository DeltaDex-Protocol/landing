import { HTMLAttributes, useEffect, useRef } from "react";
import cn from "classnames";

interface MenuCard extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  alignX?: "center" | "left" | "right";
  alignY?: "upper" | "center" | "lower";
}

// надо дописать
export const MenuCard = (props: MenuCard) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={menuRef}
      className={cn(
        "absolute bg-[rgba(255,255,255,0.87)] w-52 backdrop-blur-sm z-10 rounded-2xl overflow-hidden",
        {
          [`hidden`]: !props.isOpen,
          [`block`]: props.isOpen,

          [`right-2/4`]: props.alignX === "center" || !props.alignX,
          [`left-0`]: props.alignX === "left",
          [`right-0`]: props.alignX === "right",

          [`top-2/4 `]: props.alignY === "center" || !props.alignY,
          [`top-0`]: props.alignY === "upper",
          [`bottom-0`]: props.alignY === "lower",
        }
      )}
    >
      {props.children}
    </div>
  );
};
