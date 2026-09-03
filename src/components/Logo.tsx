import Image from "next/image";
import { LOGO_LIGHT_SRC, LOGO_SIZE, LOGO_SRC, SITE_NAME } from "@/lib/site";

interface LogoProps {
  /** "dark" er fyrir dökkan grunn (fótinn) og skilar ljósu útgáfunni. */
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}

export default function Logo({
  tone = "light",
  className = "h-9 w-auto",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={tone === "dark" ? LOGO_LIGHT_SRC : LOGO_SRC}
      alt={SITE_NAME}
      width={LOGO_SIZE.width}
      height={LOGO_SIZE.height}
      priority={priority}
      // Merkið birtist aldrei breiðara en ~180px. Án `sizes` sækir Next
      // 3840px útgáfuna af pixlateikningunni í hausinn á hverri síðu.
      sizes="180px"
      className={className}
    />
  );
}
