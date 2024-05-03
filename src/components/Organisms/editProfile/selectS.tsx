import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectSex() {
  return (
    <Select>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select a Gender" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>General Content</SelectLabel>
        <SelectItem value="male">Male</SelectItem>
        <SelectItem value="femal">Female</SelectItem>
        
      </SelectGroup>
      
    </SelectContent>
  </Select>
  )
}
