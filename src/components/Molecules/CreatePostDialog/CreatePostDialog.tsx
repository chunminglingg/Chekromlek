import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectScrollable } from "../Selection/Selection";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { HeaderPost } from "../AfterPostHeader";

const CreatePostDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <HeaderPost />
        </DialogTrigger>
        <DialogContent className="w-[645px]  max-sm:w-[90%] max-sm:rounded-md">
          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>Create a post </DialogTitle>
            <DialogDescription className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                Simplify Your Sharing Experience!
                <SelectScrollable />
              </div>
              <div className="flex flex-col gap-4 pt-6">
                <Input placeholder="Title" />
                <Textarea placeholder="Type your desciptions of your question here." />
                <div className="w-full h-[100px] border rounded-md justify-center items-center grid  gap-1.5">
                  <Input type="file" />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-8 py-2 bg-[#7B2CBF] hover:opacity-[70%] text-white rounded-md">
                  Post
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePostDialog;
