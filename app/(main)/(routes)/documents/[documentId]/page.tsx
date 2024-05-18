import { DocumentNote} from "@/app/(main)/_components/document-note";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentNoteProps {
    params: {
      documentId: Id<"documents">;
    };
  }

export const DocumentIdPage = ({params}:DocumentNoteProps) => {
    return (
        <>
         <DocumentNote documentId={params.documentId}/>
        </>
       
    );
};


