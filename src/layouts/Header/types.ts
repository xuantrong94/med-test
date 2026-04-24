import { StaticImageData } from "next/image";
import React from "react";

export interface FlagOption {
  value: string;
  flag: StaticImageData | React.ElementType;
  country: string;
  displayText: string;
}

export interface FlagOptionItemProps {
  img: StaticImageData | React.ElementType;
  text: string;
}
