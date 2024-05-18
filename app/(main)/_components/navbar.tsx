"use client";

interface NavbarProps {
    isCollapsed : boolean;
    onResetWidth : () => void;
}

export const Navbar = ({
    isCollapsed,onResetWidth
}:NavbarProps) => {
    return ( 
        <div>
            <h1>Navbar</h1>
        </div>
     );
}
 
