"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const {theme} = useTheme();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        theme === "dark" ? "bg-gradient-to-r from-cyan-900 via-gray-800 to-gray-950" : "bg-gradient-to-r from-gray-500 via-gray-400 to-pink-600",
        scrolled && "shadow-sm border-b"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Loader size={16}></Loader>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Sign Up</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Start Noting</Link>
            </Button>
            <UserButton
            afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
