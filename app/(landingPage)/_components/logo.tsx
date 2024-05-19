import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"] });

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/logo.png"
                alt="logo"
                width="40"
                height="40"
                className="object-cover"
            />
            <p className={cn(font, "text-xl font-bold")}>NextThoughts</p>
        </div>
    )
}