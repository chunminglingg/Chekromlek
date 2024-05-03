import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SelectSex } from "./selectS";
import { SelectScrollable } from "@/components/Molecules/Selection/Selection";
// import { Label } from "@/components/ui/label"

export function EditProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="outline-none">Edit Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-row items-center justify-center gap-5 outline-none">
          <div className="flex-row items-center gap-5 py-4 outline-none">
            <p className="text-left ">Bio</p>
            <input
              id="name"
              placeholder="Description"
              className="w-full h-[40px] border rounded-md  outline-none"
            />
          </div>
          <div className="flex-row w-full">
            <p className="text-left ">Gender</p>
          <SelectSex />
          </div>
          <p className="text-[10px] mt-2">{"This won't be part of your public profile."}</p>
        </div>
        <DialogFooter>
          <button type="submit" className="flex items-center justify-center border w-[100px] h-[40px] rounded-lg bg-violet-700 hover:opacity-50">Submit</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
