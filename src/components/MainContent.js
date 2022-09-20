import React from "react";
import GenrePicker from "./GenrePicker";
import TopMenu from "./TopMenu";
import AlbumList from "./AlbumList";

function MainContent() {
  return <main>
      <TopMenu></TopMenu>
      <GenrePicker></GenrePicker>
      <AlbumList></AlbumList>
      

  </main>;
}

export default MainContent;
