"use client"
import React, { ReactNode, createContext, useState } from 'react';
import { PostCardType } from '../@Types/PostCardType';

interface CardContextProp {
  children: ReactNode;
}

interface ContextProps {
  CardInfo: PostCardType[];
  setCardInfo: React.Dispatch<React.SetStateAction<PostCardType[]>>;
  toggleFavorite: (id: string) => void;
}

export const MyCardContext = createContext<ContextProps>({
  CardInfo: [],
  setCardInfo: () => {},
  toggleFavorite: () => {},
});

const CardContext: React.FC<CardContextProp> = ({ children }: CardContextProp) => {
  
  const [CardInfo, setCardInfo] = useState<PostCardType[]>([
    {
      id: '1',
      profile: '/card-svg/avatar.svg',
      hour: 10,
      title: "Who is a great example of a very passionate software engineer?",
      username: 'Kimlang Tieng',
      caption: 'Dennis attended Harvard University, and earned a BS in Physics followed by a PhD in Mathematics. During his doctoral thesis, he began working on the Multics operating system, which became a highly-influential operating system.',
      isFavorite: false
    },
    
    {
      id: '2',
      profile: '/card-svg/avatar.svg',
      hour: 2,
      username: 'Tan Hangsapho',
      title: "What skills should I learn to become a full-stack developer?",
      postImage: '/socialMedia/imageContent.svg',
      caption: 'To become a successful full-stack developer, youll need to master a diverse range of skills. Here a breakdown of the essential areas to focus on:', // Assuming you want this to be consistent
      isFavorite: false
    },
    {
      id: '3',
      profile: '/card-svg/avatar.svg',
      hour: 2,
      username: 'Khiev Navin',
      title: "What skills should I learn to become a full-stack developer?",
      caption: 'To become a successful full-stack developer, youll need to master a diverse range of skills. Here a breakdown of the essential areas to focus on:', // Assuming you want this to be consistent
      isFavorite: false
    },
  ]);
  // const handleAddCard = (CardInfo) => {
  //   const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
  //   const newCard = { ...CardInfo,id:newId};
  //   setCardInfo((prevCards) => {
  //     const newAllCards=[...prevCards, newCard];
  //     return newAllCards;
  //   });
    
  // };
   function toggleFavorite(id: string) {
     const updatedCard = CardInfo.map((card) => {
      if (card.id == id) {
        return {
          ...card,
          isFavorite: !card.isFavorite,
        };
      }
      return card;
    });
    setCardInfo(updatedCard);
  }


  // State Value
  const ContextValue = {
    CardInfo,
    setCardInfo,
    toggleFavorite,
    // handleAddCard
  };

  return (
    <MyCardContext.Provider value={ContextValue}>
      {children}
    </MyCardContext.Provider>
  );
};

export default CardContext;
