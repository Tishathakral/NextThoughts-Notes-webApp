"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronsRight, LucideIcon } from "lucide-react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({
  id,
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  isSearch,
  level = 0,
  onExpand,
  expanded,
}: ItemProps) => {
    const ChevronIcon = expanded ? ChevronDown: ChevronsRight;


  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level? `${(level*12)+12}px`: "12px" }}
      className={cn("group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-slate-900 flex items-center text-white font-medium",active && "bg-slate-900 text-white")}
      
    >
        {!!id && (
            <div
            role="button"
            className="h-full rounded-sm hover:bg-slate-400 dark:bg-slate-700 mr-1"
            onClick={()=>{}}>
                <ChevronIcon className="h-4 w-4 shrink-0 text-white"/>
            </div>
                )}
    {documentIcon? (
        <div className="shrink-0 mr-2 text-[18px]">
            {documentIcon}
            </div>
            ): (
                <Icon className="shrink-0 w-5 h-[18px] mr-2 text-white"/>
            )}
      <span className="truncate">{label}</span>
    {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-black px-1.5 font-mono text-[10px] font-medium text-white opacity-100">
            <span className="text-xs">
              CTRL
            </span>S
        </kbd>
    )}
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({level}:{level?: number}) {
    return (
        <div
        style={{ paddingLeft: level? `${(level*12)+25}px`: "12px" }}
        className="flex gap-x-2 py-[3px]"
        >
            <Skeleton
            className="h-4 w-4"/>
  <Skeleton
            className="h-4 w-[30%]"/>
         
            <div className="shrink-0 mr-2 w-5 h-[18px] bg-slate-400 animate-pulse rounded-md"/>
            <div className="flex-1 bg-slate-400 animate-pulse rounded-md"/>
        </div>
    );
};