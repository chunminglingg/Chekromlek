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
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const handleSelectCard = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="text-white-700 text-[26px] flex mt-20">
          Notification
        </div>
        <div className="flex mt-5">
          <div className=" text-gray-500 text-base font-semibold">New</div>
        </div>
        <div className="flex flex-col gap-1">
          <NotificationCard
            id="1"
            userName="Tan hangsapho"
            image="/img/pf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="2"
            userName="Tieng kimlang"
            image="/img/pf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="3"
            userName="Tieng kimlang"
            image="/img/pf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
        </div>
        <div className="flex mt-5">
          <div className="text-gray-500 text-base font-semibold">Earlier</div>
        </div>
        <div className="flex flex-col gap-1">
          <NotificationCard
            id="4"
            userName="Tieng kimlang"
            image="/img/pf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="5"
            userName="Tieng kimlang"
            image="/img/pf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
          <NotificationCard
            id="6"
            userName="Tieng kimlang"
            image="/img/pf.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscingelit"
            selectCard={selectedCard}
            onSelectCard={handleSelectCard}
          />
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
