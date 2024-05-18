"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { Title } from "./title";
import { Banner } from "./banner";
import { Menu } from "./menu";
import { useTheme } from "next-themes";

interface NavbarProps {
    isCollapsed : boolean;
    onResetWidth : () => void;
}

export const Navbar = ({
    isCollapsed,onResetWidth
}:NavbarProps) => {
    const params = useParams();
    const documents = useQuery(api.documents.getbyId, {
        documentId: params.documentId as Id<"documents">,
    });
    const {theme} = useTheme();

    if(documents === undefined){
        return  (
            <nav className="bg-background dark:bg-cyan-700 px-3 py-3 w-full flex items-center justify-between">
               <Title.Skeleton />
               <div className="flex items-center gap-x-2">
                <Menu.Skeleton/>
               </div>
            </nav>
        
        );
    }

    if(documents === null){
        return null;
    }

    return ( 
       <>
       <nav className="bg-background dark:bg-cyan-700 px-3 py-3 w-full flex items-center gap-x-4 ">
        {isCollapsed && (
            <MenuIcon
        role="button"
        onClick={onResetWidth}
        className="h-6 w-6 text-muted-foreground"
        />
    )}
    <div className="flex items-center justify-between w-full">
      <Title initialData = {documents} />
      <div className="flex items-center gap-x-2">
            <Menu documentId={documents._id}/>
      </div>
    </div>
       </nav>
        {documents.isArchived && (
            <Banner documentId = {documents._id} />)
            }
       </>
     );
}
 
