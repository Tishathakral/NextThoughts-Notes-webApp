"use client";

import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";



interface DocumentNoteProps {
  documentId: Id<"documents">;
}

export const PublishNote = ({ documentId }: DocumentNoteProps) => {
  const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), []);
  const document = useQuery(api.documents.getbyId, {
    documentId: documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: documentId as Id<"documents">,
      content: content,
    })
  };

  if (document === undefined) {
    return (
      <div>

      
      <Cover.Skeleton />
    <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
      <div className="space-y-4 pl-8 pt-4">
        <Skeleton className="w-[50%] h-14" />
        <Skeleton className="w-[80%] h-14" />
        <Skeleton className="w-[40%] h-14" />
        <Skeleton className="w-[60%] h-14" />
      </div>
    </div>
    </div>
  );
  }

  if (document === null) {
    return <div>Document not found</div>;
  }


  return (
    <div className="pb-40">
    <Cover preview url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto" >
        <Toolbar preview initialData={document}/>
        <Editor
        editable={false}
        onChange={onChange}
        initialContent = {document.content}/>
      </div>
    </div>

  );
};
