import { NotificationCard } from "@/components/Molecules/Cards/notificationCard";
import React from "react";

const NotificationPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="text-white-700 text-[26px] flex mt-20">
          Notification
        </div>
        <div className="flex mt-5">
          <div className=" text-gray-500 text-base font-semibold">New</div>
        </div>
        <div className="flex flex-col gap-1 ">
          <NotificationCard
            id="1"
            image="/img/pf.jpg"
            name="Kimlang tieng"
            description="Lorem ipsum dolor sit amet,consectetur adipiscingelit?"
          />
          <NotificationCard
            id="2"
            image="/img/pf.jpg"
            name="Kimlang tieng"
            description="Lorem ipsum dolor sit amet,consectetur adipiscingelit?"
          />
          <NotificationCard
            id="3"
            image="/img/pf.jpg"
            name="Kimlang tieng"
            description="Lorem ipsum dolor sit amet,consectetur adipiscingelit?"
          />
        </div>
        <div className="flex mt-5">
          <div className="text-gray-500 text-base font-semibold">Earlier</div>
        </div>
        <div className="flex flex-col gap-1 ">
          <NotificationCard
            id="1"
            image="/img/pf.jpg"
            name="Kimlang tieng"
            description="Lorem ipsum dolor sit amet,consectetur adipiscingelit?"
          />
          <NotificationCard
            id="2"
            image="/img/pf.jpg"
            name="Kimlang tieng"
            description="Lorem ipsum dolor sit amet,consectetur adipiscingelit?"
          />
          <NotificationCard
            id="3"
            image="/img/pf.jpg"
            name="Kimlang tieng"
            description="Lorem ipsum dolor sit amet,consectetur adipiscingelit?"
          />
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
