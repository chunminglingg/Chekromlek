"use client"
import React from "react";
import { NotificationCard } from "./notificationCard";
import { NotificationUserProps } from "@/app/(notification)/notification/page";

interface CardListProps {
  items: NotificationUserProps[];
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
}

const NotificationCardList = ({
  items,
  selectCard,
  onSelectCard,
}: CardListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <NotificationCard
          id={item.id}
          userName={item.userName}
          description={item.description}
          key={item.id || index}
          image={item.image}
          onSelectCard={onSelectCard}
          selectCard={selectCard}
        />
      ))}
    </div>
  );
};
export default NotificationCardList;
