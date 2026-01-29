import Image from "next/image";
import { techIcons } from "@/data/profile";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  const iconPath = techIcons[name];

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 transition-colors cursor-default">
      {iconPath && (
        <Image
          src={iconPath}
          alt={name}
          width={18}
          height={18}
          className="object-contain"
        />
      )}
      {name}
    </span>
  );
}
