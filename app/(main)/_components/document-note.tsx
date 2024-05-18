"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";

interface DocumentNoteProps {
  documentId: Id<"documents">;
}

export const DocumentNote = ({ documentId }: DocumentNoteProps) => {
  const document = useQuery(api.documents.getbyId, {
    documentId: documentId,
  });

  if (document === undefined) {
    return <div>Loading...</div>;
  }

  if (document === null) {
    return <div>Document not found</div>;
  }

  return (
    <div className="pb-40">
        <div className="h-[35vh]"/>
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto" ><Toolbar initialData={document}/></div>
    </div>

  );
};
