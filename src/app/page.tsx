"use client";
import Logo from "@/components/Atoms/Logo/Logo";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  Post,
} from "@/components";
import { InputSearch } from "@/components/Molecules/Search";
import SideLeft from "@/components/Molecules/SideLeft/SideLeft";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FormPost from "@/components/Molecules/Post/FormPost";
import Modal from "@/components/Molecules/Post/Modal/Modal";
export default function Home() {
  return (
    <>
    {/* md:ms-[15%] */}
      <div className="relative items-center justify-center mt-[8%] w-auto md:ms-[15%] sm:w-20 ">  
        <div className="">
        <Modal/>
        </div>
        <div className="w-auto md:ms-[72%] sm:ms-0 ">
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
       
      </div>
    </>
  );
}
