"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

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
      <div>Notes here </div>
    </div>
  );
};
