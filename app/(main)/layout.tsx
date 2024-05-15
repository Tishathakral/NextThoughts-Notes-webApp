"use client";

import { useConvexAuth } from "convex/react";
import { Loader} from "lucide-react";
import { redirect } from "next/navigation";

const MainLayout = ({
    children
}:{children: React.ReactNode;}) => {
    const {isAuthenticated,isLoading} = useConvexAuth();
    if(isLoading) return (
        <div className="h-full flex items-center justify-center"><Loader size={24}/></div>
    )

    if(!isAuthenticated) return (
       redirect("/")
    )

    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default MainLayout;