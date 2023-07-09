import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding: 0%;
  margin: 25px;
  border: 2px solid black;
  border-radius: 5%;
  background-color: #a8b0c2;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  //border: 1px solid black;
  position: relative;
  margin: 0;
  padding: 0%;
`;

const CardPic = styled.img`
  max-width: 100%;
  max-height: 60%;
  margin: 2.5%;
`;

const CardClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 1.5%;
  margin-right: 1.5%;
  top: 0%;
  right: 0%;
  width: 2em;
  height: 2em;
  background-color: red;
  border-radius: 15%;
`;

const CardName = styled.h2`
  display: flex;
  margin: 1%;
  font-weight: 550;
  color: #1c9931b5;
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const CardInfo = styled.h2`
  font-size: large;
  font-weight: 500;
`;

export default function Card({ onClose, name, species, gender, image, id }) {
  return (
    <CardContainer>
      <TopContainer>
        <CardName>{name}</CardName>
        <CardClose onClick={() => onClose(id)}>X</CardClose>
      </TopContainer>
      <CardPic src={image} alt="" />
      <CardInfoContainer>
        <CardInfo>{species}</CardInfo>
        <CardInfo>{gender}</CardInfo>
      </CardInfoContainer>
    </CardContainer>
  );
}
