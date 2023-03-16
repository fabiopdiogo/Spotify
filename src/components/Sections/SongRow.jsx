import React from "react";
import styled from "styled-components";

const SongRowContainer = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
`;

const AlbumImage = styled.img`
  height: 40px;
  width: 40px;
`;

const SongInfoContainer = styled.div`
  margin-left: 20px;

  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`;

const SongName = styled.h1`
  margin: 0;
  font-size: 14px;
`;

const ArtistAlbum = styled.p`
  margin: 0;
  font-size: 12px;
  color: gray;
`;

function SongRow({ track, playSong }) {
  console.log(track);
  return (
    <SongRowContainer onClick={() => playSong(track.id)}>
      <AlbumImage className="songRow__album" src={track.album.images[0].url} alt="" />
      <SongInfoContainer className="songRow__info">
        <SongName>{track.name}</SongName>
        <ArtistAlbum>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </ArtistAlbum>
      </SongInfoContainer>
    </SongRowContainer>
  );
}

export default SongRow;
