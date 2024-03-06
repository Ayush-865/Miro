import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistance } from "date-fns";

interface FooterProps {
  isFavourite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  isFavourite,
  authorLabel,
  createdAtLabel,
  disabled,
  onClick,
  title,
}: FooterProps) => {
  return (
    <>
      <div className="relative bg-white p-3">
        <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
          {authorLabel}, {formatDistance(new Date(createdAtLabel), new Date())}{" "}
          ago
        </p>
        <button
          disabled={disabled}
          onClick={onClick}
          className={cn(
            "opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
            disabled && "cursor-not-allowed opacity-75"
          )}
        >
          <Star className={cn("w-4 h-4 ", isFavourite && "fill-blue-600")} />
        </button>
      </div>
    </>
  );
};

export default Footer;
