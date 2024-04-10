"use client";
import Logo from "@/components/Atoms/Logo/Logo";
import { ButtonCategories } from "@/components/Molecules";
import SideLeft from "@/components/Molecules/SideLeft/SideLeft";
import ButtonCategorieslist from "@/components/Organisms/ButtonCategorieslist/ButtonCategorieslist";
import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <>
      <ButtonCategorieslist></ButtonCategorieslist>
    </>
  );
}
