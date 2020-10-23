import React from "react";
import "./music.css";
import Information from '../../Components/information/information';
import friendData from '../../Data/friend.json';

const getFriendColl = (list) => list.music;

const Music = () => {
  console.log(getFriendColl(friendData));
  return (
    <Information coll={'music'} title={'Bands'}/>
  );
};

export default Music;
