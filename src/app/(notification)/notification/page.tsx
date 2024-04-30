"use client";

import { NotificationCard } from "@/components/Molecules/Cards/notificationCard";
import React, { useState } from "react";

export interface NotificationUserProps {
  id: string;
  userName: string;
  image: string;
  description: string;
}

const NotificationPage = () => {
  // const [selectedCard, setSelectedCard] = useState<string | null>(null);
  // const handleSelectCard = (id: string) => {
  //   setSelectedCard(id);
  // };

  return (
    <>
    <div  className="flex flex-col " >
    <div className="text-gray-600 text-[26px] flex mt-20 pl-2 pt-2 font-semibold">
          Notification
        </div>
    
    </div>

      {/* <div className="flex flex-col ">
        <div className="text-gray-600 text-[26px] flex mt-20 pl-2 pt-2 font-semibold">
          Notification
        </div>
        <div className="flex mt-5">
          <div className=" text-gray-600 text-base font-semibold pl-4">New</div>
        </div>
        <div className="flex flex-col gap-1">
          <NotificationCard
            id="1"
            userName="Tan hangsapho"
            image="/imgs/mypf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="2"
            userName="Tieng kimlang"
            image="/imgs/mypf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="3"
            userName="Tieng kimlang"
            image="/imgs/mypf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
        </div>
        <div className="flex mt-5">
          <div className="text-gray-600 text-base font-semibold pl-4">
            Earlier
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <NotificationCard
            id="4"
            userName="Tieng kimlang"
            image="/imgs/mypf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="5"
            userName="Tieng kimlang"
            image="/imgs/mypf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="6"
            userName="Tieng kimlang"
            image="/imgs/mypf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
        </div>
      </div> */}

    </>
  );
};

export default NotificationPage;
