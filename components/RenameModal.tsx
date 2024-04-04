"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { db } from "@/firebase";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { updateDoc, doc } from "firebase/firestore";
import { useState } from "react";
import toast from 'react-hot-toast';

export function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [isRenameModalOpen, setIsRenameModalOpen, fileId, fileName, filename] =
    useAppStore((state) => [
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
      state.setFilename,
      state.filename,
    ]);

  async function handleRename() {
    try {
      if (!user || !fileId) return;
      const toastId = toast.loading("Renaming...");

      await updateDoc(doc(db, "users", user.id, "files", fileId), {
        fileName: input,
      });

      toast.success("Renamed Successfully",{
        id: toastId
      })
      setInput("");
    } catch (error) {
      setIsRenameModalOpen(false);
      console.error("Error:", error);
    } finally {
      setInput("");
      setIsRenameModalOpen(false);
    }
  }

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="roboto">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename This File</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                handleRename();
              }
            }}
          />
          <div className="flex justify-end space-x-2 py-3">
            <Button
              size="sm"
              className="px-3"
              variant={"ghost"}
              onClick={() => {
                setIsRenameModalOpen(false);
              }}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

            <Button
              size="sm"
              className="px-3"
              onClick={() => {
                handleRename();
                setIsRenameModalOpen(false);
              }}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
