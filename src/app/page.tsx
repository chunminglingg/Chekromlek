"use client";
import Logo from "@/components/Atoms/Logo/Logo";
import { Card, CardHeader, CardBody,CardFooter, CardImage, Post } from "@/components";
import { InputSearch } from "@/components/Molecules/Search";
import SideLeft from "@/components/Molecules/SideLeft/SideLeft";
import Link from "next/link";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <>
    <div className=" mt-[8%] md:ms-[7%] ms-0 ">
    <Post/>
    </div>
      <div className="w-auto ms-[12%] ">
        
            <Card>
              <CardHeader
                img="/profile.svg"
                username="Nema Sophia"
                time="2 hours ago"
              />
              <CardBody>
                {`What's your favorite childhood memory? What's your favorite movie and why? yarn
                What was your worst date? What was your favorite
                subject in school? What do you enjoy doing in your free time?
                What's your favorite family holiday tradition? What's your
                favorite family recipe?`}
              </CardBody>
              <CardImage img="/WIN.jpg" />
              <CardFooter>28</CardFooter>
            </Card>
            <Card>
              <CardHeader
                img="/WIN.jpg"
                username="Nema Sophia"
                time="2 hours ago"
              />
              <CardBody>
                {`What's your favorite childhood memory? What's your favorite movie and why? yarn
                What was your worst date? What was your favorite
                subject in school? What do you enjoy doing in your free time?
                What's your favorite family holiday tradition? What's your
                favorite family recipe?`}
              </CardBody>
              <CardFooter>28</CardFooter>
            </Card>
      </div>
      
    </>
  );
}
