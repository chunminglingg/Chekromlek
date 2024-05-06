"use client";

import NotificationCardList from "@/components/Molecules/Cards/notificationCardList";
import React, { useState } from "react";

export interface NotificationUserProps {
  id: string;
  userName: string;
  image: string;
  description: string;
}

const NotificationPage = () => {

  return (
    <>
      <div className="flex flex-col ">
        <div className="text-gray-600 text-[26px] flex mt-20 pl-2 pt-2 font-semibold">
          Notification
        </div>
        <div className="flex mt-5">
          <div className=" text-gray-600 text-base font-semibold pl-4">New</div>
        </div>
        <NotificationCardList />
        <div className="flex mt-5">
          <div className="text-gray-600 text-base font-semibold pl-4">
            Earlier
          </div>
        </div>
        <NotificationCardList />
      </div>

    
    </>
  );
};

export default NotificationPage;
