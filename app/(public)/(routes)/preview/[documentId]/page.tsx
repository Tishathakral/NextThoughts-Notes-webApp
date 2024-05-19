import { PublishNote } from "@/app/(main)/_components/publish-note";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentNoteProps {
  params: {
    documentId: Id<"documents">;
  };
}

const PublishNotePage = ({ params }: DocumentNoteProps) => {
  return (
    <>
      <PublishNote documentId={params.documentId} />
    </>
  );
};

export default PublishNotePage;
