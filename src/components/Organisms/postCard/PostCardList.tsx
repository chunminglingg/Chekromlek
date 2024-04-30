"use client"
import React, { useContext } from 'react';
import PostCard from './PostCard'; // Assuming PostCard component is imported correctly
import { MyCardContext } from '@/contexts/PostCardContext/PostCardContext'; // Assuming correct path

const PostCardList: React.FC = () => {
  const { CardInfo } = useContext(MyCardContext);
 

  return (
    <div className='space-y-4'>
      {CardInfo.map((info) => (
        <PostCard
          key={info.id}
          hour={info.hour}
          caption={info.caption}
          profile={info.profile}
          username={info.username}
          postImage={info.postImage}
          title={info.title}
        />
      ))}
    </div>
  );
};

export default PostCardList;
