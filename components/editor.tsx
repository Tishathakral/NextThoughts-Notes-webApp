"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

import { useEdgeStore } from "@/lib/edgestore";
import { PartialBlock } from "@blocknote/core";

type EditorProps = {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,

    uploadFile: handleUpload,
  });

  const handleEditorContentChange =  () => {
    if (!editable) return;
    const html =  editor.document;
    onChange(JSON.stringify(html));
  };

  return (
    <div>
      {editor && (
        <BlockNoteView
          editor={editor}
          editable={editable}
          onChange={handleEditorContentChange}
          theme={resolvedTheme === "dark" ? "dark" : "light"}
        />
      )}
    </div>
  );
};

export default Editor;
