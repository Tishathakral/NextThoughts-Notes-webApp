"use client";
import React from "react";
import { LampContainer, LampDemo } from "../../../components/ui/lamp";
import { motion } from "framer-motion";
import { CirclePlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { useRouter } from "next/navigation";

const Document = () => {
  const { theme } = useTheme();
  return (
    <div>
      {theme === "light" ? (
        <HeroHighlight>
        <Heading />
      </HeroHighlight>
       
      ) : (
        <LampContainer>
        <Heading />
      </LampContainer>
      )}
    </div>
  );
};

const Heading = () => {
  const router = useRouter();
  const { user } = useUser();
  const createNote = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = createNote({
      title: "Untitled",
    }).then((documentId)=> router.push(`/document/${documentId}`));
    toast.promise(promise, {
      loading: "Creating a New Note...",
      success: "New Note Created",
      error: "Failed to create Note",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex justify-center items-center flex-col bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build Notes <br />
        Right away
      </motion.h1>

      <Button
        onClick={onCreate}
        className="inline-flex h-12 animate-shimmer mt-6 items-center justify-center rounded-md border border-cyan-500 bg-[linear-gradient(110deg,#111827,45%,#1e2631,55%,#111827)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:text-white "
      >
        <CirclePlusIcon className="w-5 h-5 mr-2" /> Create a Note
      </Button>
      <motion.h2 className="text-md m-2 text-spacing font-light">
        Welcome to {user?.firstName}&apos;s NextThoughts
      </motion.h2>
    </div>
  );
};

export default Document;
