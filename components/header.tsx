import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ArrowRight, Loader } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const words1 =
    {
      text: "Elevate your Note-Taking Experience",
      className: "text-md tracking-wide text-center md:text-3xl lg:text-4xl font-extrabold mb-8",
    }
  const words2 =
    {
      text: "Capture ideas, note down thoughts, and stay organized",
      className: "text-xl md:text-xl text-center lg:text-2xl font-bold",
    }
  return (
    <div className="flex flex-col justify-center items-center mx-auto py-20 md:py-32 px-4 w-full  left-0 top-0">
      <h1 className={words1.className}
      >
        {words1.text}
      </h1>
      <h1 className={words2.className}
      >
        {words2.text}
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        {isLoading && <Loader size={32} className="z-20" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button
                size="sm"
                className="z-20 bg-purple-800 dark:bg-dark-gradient p-6 hover:bg-slate-900 dark:text-white dark:hover:bg-slate-950 text-md"
              >
            Start Noting <ArrowRight className="h-4 w-4 ml-2"/>
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button
              className="z-20 bg-purple-500 dark:bg-dark-gradient p-6 hover:bg-slate-900 dark:text-white dark:hover:bg-slate-950 text-md"
              size="sm"
              asChild
            >
              <Link href="/documents">Start Noting <ArrowRight className="h-4 w-4 ml-2"/></Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
