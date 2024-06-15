"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { useSettings } from "@/hooks/use-settings";
import { Label } from "../ui/label";
import { ModeToggle } from "../mode-toggle";

export const SettingModal = () => {
    const settings = useSettings();
    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent className="w-11/12">
                <DialogHeader  className="border-b pb-3">
                    <h2 className="text-lg font-medium">My Settings</h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                    <Label>Appearance</Label>
                    <span className="text-[0.8rem]text-white">Customize how NextThoughts looks on your device</span>
                    </div>
                    <Label className="mr-2 ">Mode</Label>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
};

