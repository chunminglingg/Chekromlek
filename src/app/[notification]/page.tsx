import { NotificationCard } from "@/components/Molecules/Cards/notificationCard";
import React from "react";

const NotificationPage = () => {
  return (
    <>
      <div className="flex justify-center mt-25">
        <NotificationCard
          id="1"
          image="/img/pf.jpg"
          name=""
          description="Kimlang tieng, Lorem ipsum dolor sit amet, consectetur adipiscingelit?... "
        />
      </div>
    </>
  );
};

export default NotificationPage;
