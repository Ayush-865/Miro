import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Colors = ["red", "yellow", "green", "blue", "purple", "pink"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number) {
  return Colors[connectionId % Colors.length];
}
