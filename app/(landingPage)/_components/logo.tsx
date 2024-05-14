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
                src="/logo.svg"
                alt="logo"
                width="40"
                height="40"
                className="dark:hidden"
            />
             <Image
                src="/logo.svg"
                alt="logo"
                width="40"
                height="40"
                className="hidden dark:block"
            />
            <p className={cn(font, "text-xl font-bold")}>NextThoughts</p>
        </div>
    )
}