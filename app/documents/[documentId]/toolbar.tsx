"use client";

import { LucideIcon, Undo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";

interface ToolbarButtonProps {
    icon: LucideIcon;
    isActive: boolean;
    onClick: () => void;
}

interface ToolbarSectionProps extends ToolbarButtonProps {
    label: string;
}

const ToolbarButton = ({ icon: Icon, isActive, onClick }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                isActive && "bg-neutral-200/80"
            )}
        >
            <Icon className="size-4" />
        </button>
    );
};
export default function Toolbar() {
    const { editor } = useEditorStore()

    const sections: ToolbarSectionProps[][] =
        [
            [{
                label: "Edit",
                icon: Undo2Icon,
                isActive: true,
                onClick: () => editor?.chain().focus().undo().run()
            }]
        ];
    return (
        <div
            className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {
                sections[0].map((item) => {
                    return <ToolbarButton key={item.label} {...item} />
                })
            }
        </div>
    );
}
