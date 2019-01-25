import React from "react";
import PropTypes from "prop-types";

import CardBack from "../assets/card-back.png";
import TwoClubs from "../assets/2C.png";
import ThreeClubs from "../assets/3C.png";
import FourClubs from "../assets/4C.png";
import FiveClubs from "../assets/5C.png";
import SixClubs from "../assets/6C.png";
import SevenClubs from "../assets/7C.png";
import EightClubs from "../assets/8C.png";
import NineClubs from "../assets/9C.png";
import TenClubs from "../assets/10C.png";
import JackClubs from "../assets/JC.png";
import QueenClubs from "../assets/QC.png";
import KingClubs from "../assets/KC.png";
import AceClubs from "../assets/AC.png";
import TwoDiamonds from "../assets/2D.png";
import ThreeDiamonds from "../assets/3D.png";
import FourDiamonds from "../assets/4D.png";
import FiveDiamonds from "../assets/5D.png";
import SixDiamonds from "../assets/6D.png";
import SevenDiamonds from "../assets/7D.png";
import EightDiamonds from "../assets/8D.png";
import NineDiamonds from "../assets/9D.png";
import TenDiamonds from "../assets/10D.png";
import JackDiamonds from "../assets/JD.png";
import QueenDiamonds from "../assets/QD.png";
import KingDiamonds from "../assets/KD.png";
import AceDiamonds from "../assets/AD.png";
import TwoHearts from "../assets/2H.png";
import ThreeHearts from "../assets/3H.png";
import FourHearts from "../assets/4H.png";
import FiveHearts from "../assets/5H.png";
import SixHearts from "../assets/6H.png";
import SevenHearts from "../assets/7H.png";
import EightHearts from "../assets/8H.png";
import NineHearts from "../assets/9H.png";
import TenHearts from "../assets/10H.png";
import JackHearts from "../assets/JH.png";
import QueenHearts from "../assets/QH.png";
import KingHearts from "../assets/KH.png";
import AceHearts from "../assets/AH.png";
import TwoSpades from "../assets/2S.png";
import ThreeSpades from "../assets/3S.png";
import FourSpades from "../assets/4S.png";
import FiveSpades from "../assets/5S.png";
import SixSpades from "../assets/6S.png";
import SevenSpades from "../assets/7S.png";
import EightSpades from "../assets/8S.png";
import NineSpades from "../assets/9S.png";
import TenSpades from "../assets/10S.png";
import JackSpades from "../assets/JS.png";
import QueenSpades from "../assets/QS.png";
import KingSpades from "../assets/KS.png";
import AceSpades from "../assets/AS.png";

const Card = props => {
  let cardImage;
  if (props.name === "blank") {
    cardImage = <img className="card-image" src={CardBack} alt="Blank Card" />;
  } else if (props.name === "Two of Clubs") {
    cardImage = (
      <img className="card-image" src={TwoClubs} alt="Two of Clubs" />
    );
  } else if (props.name === "Three of Clubs") {
    cardImage = (
      <img className="card-image" src={ThreeClubs} alt="Three of Clubs" />
    );
  } else if (props.name === "Four of Clubs") {
    cardImage = (
      <img className="card-image" src={FourClubs} alt="Four of Clubs" />
    );
  } else if (props.name === "Five of Clubs") {
    cardImage = (
      <img className="card-image" src={FiveClubs} alt="Five of Clubs" />
    );
  } else if (props.name === "Six of Clubs") {
    cardImage = (
      <img className="card-image" src={SixClubs} alt="Six of Clubs" />
    );
  } else if (props.name === "Seven of Clubs") {
    cardImage = (
      <img className="card-image" src={SevenClubs} alt="Seven of Clubs" />
    );
  } else if (props.name === "Eight of Clubs") {
    cardImage = (
      <img className="card-image" src={EightClubs} alt="Eight of Clubs" />
    );
  } else if (props.name === "Nine of Clubs") {
    cardImage = (
      <img className="card-image" src={NineClubs} alt="Nine of Clubs" />
    );
  } else if (props.name === "Ten of Clubs") {
    cardImage = (
      <img className="card-image" src={TenClubs} alt="Ten of Clubs" />
    );
  } else if (props.name === "Jack of Clubs") {
    cardImage = (
      <img className="card-image" src={JackClubs} alt="Jack of Clubs" />
    );
  } else if (props.name === "Queen of Clubs") {
    cardImage = (
      <img className="card-image" src={QueenClubs} alt="Queen of Clubs" />
    );
  } else if (props.name === "King of Clubs") {
    cardImage = (
      <img className="card-image" src={KingClubs} alt="King of Clubs" />
    );
  } else if (props.name === "Ace of Clubs") {
    cardImage = (
      <img className="card-image" src={AceClubs} alt="Ace of Clubs" />
    );
  } else if (props.name === "Two of Diamonds") {
    cardImage = (
      <img className="card-image" src={TwoDiamonds} alt="Two of Diamonds" />
    );
  } else if (props.name === "Three of Diamonds") {
    cardImage = (
      <img className="card-image" src={ThreeDiamonds} alt="Three of Diamonds" />
    );
  } else if (props.name === "Four of Diamonds") {
    cardImage = (
      <img className="card-image" src={FourDiamonds} alt="Four of Diamonds" />
    );
  } else if (props.name === "Five of Diamonds") {
    cardImage = (
      <img className="card-image" src={FiveDiamonds} alt="Five of Diamonds" />
    );
  } else if (props.name === "Six of Diamonds") {
    cardImage = (
      <img className="card-image" src={SixDiamonds} alt="Six of Diamonds" />
    );
  } else if (props.name === "Seven of Diamonds") {
    cardImage = (
      <img className="card-image" src={SevenDiamonds} alt="Seven of Diamonds" />
    );
  } else if (props.name === "Eight of Diamonds") {
    cardImage = (
      <img className="card-image" src={EightDiamonds} alt="Eight of Diamonds" />
    );
  } else if (props.name === "Nine of Diamonds") {
    cardImage = (
      <img className="card-image" src={NineDiamonds} alt="Nine of Diamonds" />
    );
  } else if (props.name === "Ten of Diamonds") {
    cardImage = (
      <img className="card-image" src={TenDiamonds} alt="Ten of Diamonds" />
    );
  } else if (props.name === "Jack of Diamonds") {
    cardImage = (
      <img className="card-image" src={JackDiamonds} alt="Jack of Diamonds" />
    );
  } else if (props.name === "Queen of Diamonds") {
    cardImage = (
      <img className="card-image" src={QueenDiamonds} alt="Queen of Diamonds" />
    );
  } else if (props.name === "King of Diamonds") {
    cardImage = (
      <img className="card-image" src={KingDiamonds} alt="King of Diamonds" />
    );
  } else if (props.name === "Ace of Diamonds") {
    cardImage = (
      <img className="card-image" src={AceDiamonds} alt="Ace of Diamonds" />
    );
  } else if (props.name === "Two of Hearts") {
    cardImage = (
      <img className="card-image" src={TwoHearts} alt="Two of Hearts" />
    );
  } else if (props.name === "Three of Hearts") {
    cardImage = (
      <img className="card-image" src={ThreeHearts} alt="Three of Hearts" />
    );
  } else if (props.name === "Four of Hearts") {
    cardImage = (
      <img className="card-image" src={FourHearts} alt="Four of Hearts" />
    );
  } else if (props.name === "Five of Hearts") {
    cardImage = (
      <img className="card-image" src={FiveHearts} alt="Five of Hearts" />
    );
  } else if (props.name === "Six of Hearts") {
    cardImage = (
      <img className="card-image" src={SixHearts} alt="Six of Hearts" />
    );
  } else if (props.name === "Seven of Hearts") {
    cardImage = (
      <img className="card-image" src={SevenHearts} alt="Seven of Hearts" />
    );
  } else if (props.name === "Eight of Hearts") {
    cardImage = (
      <img className="card-image" src={EightHearts} alt="Eight of Hearts" />
    );
  } else if (props.name === "Nine of Hearts") {
    cardImage = (
      <img className="card-image" src={NineHearts} alt="Nine of Hearts" />
    );
  } else if (props.name === "Ten of Hearts") {
    cardImage = (
      <img className="card-image" src={TenHearts} alt="Ten of Hearts" />
    );
  } else if (props.name === "Jack of Hearts") {
    cardImage = (
      <img className="card-image" src={JackHearts} alt="Jack of Hearts" />
    );
  } else if (props.name === "Queen of Hearts") {
    cardImage = (
      <img className="card-image" src={QueenHearts} alt="Queen of Hearts" />
    );
  } else if (props.name === "King of Hearts") {
    cardImage = (
      <img className="card-image" src={KingHearts} alt="King of Hearts" />
    );
  } else if (props.name === "Ace of Hearts") {
    cardImage = (
      <img className="card-image" src={AceHearts} alt="Ace of Hearts" />
    );
  } else if (props.name === "Two of Spades") {
    cardImage = (
      <img className="card-image" src={TwoSpades} alt="Two of Spades" />
    );
  } else if (props.name === "Three of Spades") {
    cardImage = (
      <img className="card-image" src={ThreeSpades} alt="Three of Spades" />
    );
  } else if (props.name === "Four of Spades") {
    cardImage = (
      <img className="card-image" src={FourSpades} alt="Four of Spades" />
    );
  } else if (props.name === "Five of Spades") {
    cardImage = (
      <img className="card-image" src={FiveSpades} alt="Five of Spades" />
    );
  } else if (props.name === "Six of Spades") {
    cardImage = (
      <img className="card-image" src={SixSpades} alt="Six of Spades" />
    );
  } else if (props.name === "Seven of Spades") {
    cardImage = (
      <img className="card-image" src={SevenSpades} alt="Seven of Spades" />
    );
  } else if (props.name === "Eight of Spades") {
    cardImage = (
      <img className="card-image" src={EightSpades} alt="Eight of Spades" />
    );
  } else if (props.name === "Nine of Spades") {
    cardImage = (
      <img className="card-image" src={NineSpades} alt="Nine of Spades" />
    );
  } else if (props.name === "Ten of Spades") {
    cardImage = (
      <img className="card-image" src={TenSpades} alt="Ten of Spades" />
    );
  } else if (props.name === "Jack of Spades") {
    cardImage = (
      <img className="card-image" src={JackSpades} alt="Jack of Spades" />
    );
  } else if (props.name === "Queen of Spades") {
    cardImage = (
      <img className="card-image" src={QueenSpades} alt="Queen of Spades" />
    );
  } else if (props.name === "King of Spades") {
    cardImage = (
      <img className="card-image" src={KingSpades} alt="King of Spades" />
    );
  } else if (props.name === "Ace of Spades") {
    cardImage = (
      <img className="card-image" src={AceSpades} alt="Ace of Spades" />
    );
  }
  return <div>{cardImage}</div>;
};
Card.propTypes = {
  name: PropTypes.string
};

export default Card;
