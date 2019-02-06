import React from "react";
import PropTypes from "prop-types";

import CardBack from "../assets/images/card-back.png";
import TwoClubs from "../assets/images/2C.png";
import ThreeClubs from "../assets/images/3C.png";
import FourClubs from "../assets/images/4C.png";
import FiveClubs from "../assets/images/5C.png";
import SixClubs from "../assets/images/6C.png";
import SevenClubs from "../assets/images/7C.png";
import EightClubs from "../assets/images/8C.png";
import NineClubs from "../assets/images/9C.png";
import TenClubs from "../assets/images/10C.png";
import JackClubs from "../assets/images/JC.png";
import QueenClubs from "../assets/images/QC.png";
import KingClubs from "../assets/images/KC.png";
import AceClubs from "../assets/images/AC.png";
import TwoDiamonds from "../assets/images/2D.png";
import ThreeDiamonds from "../assets/images/3D.png";
import FourDiamonds from "../assets/images/4D.png";
import FiveDiamonds from "../assets/images/5D.png";
import SixDiamonds from "../assets/images/6D.png";
import SevenDiamonds from "../assets/images/7D.png";
import EightDiamonds from "../assets/images/8D.png";
import NineDiamonds from "../assets/images/9D.png";
import TenDiamonds from "../assets/images/10D.png";
import JackDiamonds from "../assets/images/JD.png";
import QueenDiamonds from "../assets/images/QD.png";
import KingDiamonds from "../assets/images/KD.png";
import AceDiamonds from "../assets/images/AD.png";
import TwoHearts from "../assets/images/2H.png";
import ThreeHearts from "../assets/images/3H.png";
import FourHearts from "../assets/images/4H.png";
import FiveHearts from "../assets/images/5H.png";
import SixHearts from "../assets/images/6H.png";
import SevenHearts from "../assets/images/7H.png";
import EightHearts from "../assets/images/8H.png";
import NineHearts from "../assets/images/9H.png";
import TenHearts from "../assets/images/10H.png";
import JackHearts from "../assets/images/JH.png";
import QueenHearts from "../assets/images/QH.png";
import KingHearts from "../assets/images/KH.png";
import AceHearts from "../assets/images/AH.png";
import TwoSpades from "../assets/images/2S.png";
import ThreeSpades from "../assets/images/3S.png";
import FourSpades from "../assets/images/4S.png";
import FiveSpades from "../assets/images/5S.png";
import SixSpades from "../assets/images/6S.png";
import SevenSpades from "../assets/images/7S.png";
import EightSpades from "../assets/images/8S.png";
import NineSpades from "../assets/images/9S.png";
import TenSpades from "../assets/images/10S.png";
import JackSpades from "../assets/images/JS.png";
import QueenSpades from "../assets/images/QS.png";
import KingSpades from "../assets/images/KS.png";
import AceSpades from "../assets/images/AS.png";

const Card = ({ name }) => {
  let cardImage;

  switch (name) {
    case "blank":
      cardImage = <img className="card-image" src={CardBack} alt="card" />;
      break;
    case "Two of Clubs":
      cardImage = <img className="card-image" src={TwoClubs} alt="card" />;
      break;
    case "Three of Clubs":
      cardImage = <img className="card-image" src={ThreeClubs} alt="card" />;
      break;
    case "Four of Clubs":
      cardImage = <img className="card-image" src={FourClubs} alt="card" />;
      break;
    case "Five of Clubs":
      cardImage = <img className="card-image" src={FiveClubs} alt="card" />;
      break;
    case "Six of Clubs":
      cardImage = <img className="card-image" src={SixClubs} alt="card" />;
      break;
    case "Seven of Clubs":
      cardImage = <img className="card-image" src={SevenClubs} alt="card" />;
      break;
    case "Eight of Clubs":
      cardImage = <img className="card-image" src={EightClubs} alt="card" />;
      break;
    case "Nine of Clubs":
      cardImage = <img className="card-image" src={NineClubs} alt="card" />;
      break;
    case "Ten of Clubs":
      cardImage = <img className="card-image" src={TenClubs} alt="card" />;
      break;
    case "Jack of Clubs":
      cardImage = <img className="card-image" src={JackClubs} alt="card" />;
      break;
    case "Queen of Clubs":
      cardImage = <img className="card-image" src={QueenClubs} alt="card" />;
      break;
    case "King of Clubs":
      cardImage = <img className="card-image" src={KingClubs} alt="card" />;
      break;
    case "Ace of Clubs":
      cardImage = <img className="card-image" src={AceClubs} alt="card" />;
      break;

    case "Two of Diamonds":
      cardImage = <img className="card-image" src={TwoDiamonds} alt="card" />;
      break;
    case "Three of Diamonds":
      cardImage = <img className="card-image" src={ThreeDiamonds} alt="card" />;
      break;
    case "Four of Diamonds":
      cardImage = <img className="card-image" src={FourDiamonds} alt="card" />;
      break;
    case "Five of Diamonds":
      cardImage = <img className="card-image" src={FiveDiamonds} alt="card" />;
      break;
    case "Six of Diamonds":
      cardImage = <img className="card-image" src={SixDiamonds} alt="card" />;
      break;
    case "Seven of Diamonds":
      cardImage = <img className="card-image" src={SevenDiamonds} alt="card" />;
      break;
    case "Eight of Diamonds":
      cardImage = <img className="card-image" src={EightDiamonds} alt="card" />;
      break;
    case "Nine of Diamonds":
      cardImage = <img className="card-image" src={NineDiamonds} alt="card" />;
      break;
    case "Ten of Diamonds":
      cardImage = <img className="card-image" src={TenDiamonds} alt="card" />;
      break;
    case "Jack of Diamonds":
      cardImage = <img className="card-image" src={JackDiamonds} alt="card" />;
      break;
    case "Queen of Diamonds":
      cardImage = <img className="card-image" src={QueenDiamonds} alt="card" />;
      break;
    case "King of Diamonds":
      cardImage = <img className="card-image" src={KingDiamonds} alt="card" />;
      break;
    case "Ace of Diamonds":
      cardImage = <img className="card-image" src={AceDiamonds} alt="card" />;
      break;

    case "Two of Hearts":
      cardImage = <img className="card-image" src={TwoHearts} alt="card" />;
      break;
    case "Three of Hearts":
      cardImage = <img className="card-image" src={ThreeHearts} alt="card" />;
      break;
    case "Four of Hearts":
      cardImage = <img className="card-image" src={FourHearts} alt="card" />;
      break;
    case "Five of Hearts":
      cardImage = <img className="card-image" src={FiveHearts} alt="card" />;
      break;
    case "Six of Hearts":
      cardImage = <img className="card-image" src={SixHearts} alt="card" />;
      break;
    case "Seven of Hearts":
      cardImage = <img className="card-image" src={SevenHearts} alt="card" />;
      break;
    case "Eight of Hearts":
      cardImage = <img className="card-image" src={EightHearts} alt="card" />;
      break;
    case "Nine of Hearts":
      cardImage = <img className="card-image" src={NineHearts} alt="card" />;
      break;
    case "Ten of Hearts":
      cardImage = <img className="card-image" src={TenHearts} alt="card" />;
      break;
    case "Jack of Hearts":
      cardImage = <img className="card-image" src={JackHearts} alt="card" />;
      break;
    case "Queen of Hearts":
      cardImage = <img className="card-image" src={QueenHearts} alt="card" />;
      break;
    case "King of Hearts":
      cardImage = <img className="card-image" src={KingHearts} alt="card" />;
      break;
    case "Ace of Hearts":
      cardImage = <img className="card-image" src={AceHearts} alt="card" />;
      break;

    case "Two of Spades":
      cardImage = <img className="card-image" src={TwoSpades} alt="card" />;
      break;
    case "Three of Spades":
      cardImage = <img className="card-image" src={ThreeSpades} alt="card" />;
      break;
    case "Four of Spades":
      cardImage = <img className="card-image" src={FourSpades} alt="card" />;
      break;
    case "Five of Spades":
      cardImage = <img className="card-image" src={FiveSpades} alt="card" />;
      break;
    case "Six of Spades":
      cardImage = <img className="card-image" src={SixSpades} alt="card" />;
      break;
    case "Seven of Spades":
      cardImage = <img className="card-image" src={SevenSpades} alt="card" />;
      break;
    case "Eight of Spades":
      cardImage = <img className="card-image" src={EightSpades} alt="card" />;
      break;
    case "Nine of Spades":
      cardImage = <img className="card-image" src={NineSpades} alt="card" />;
      break;
    case "Ten of Spades":
      cardImage = <img className="card-image" src={TenSpades} alt="card" />;
      break;
    case "Jack of Spades":
      cardImage = <img className="card-image" src={JackSpades} alt="card" />;
      break;
    case "Queen of Spades":
      cardImage = <img className="card-image" src={QueenSpades} alt="card" />;
      break;
    case "King of Spades":
      cardImage = <img className="card-image" src={KingSpades} alt="card" />;
      break;
    case "Ace of Spades":
      cardImage = <img className="card-image" src={AceSpades} alt="card" />;
      break;

    default:
  }

  return <div>{cardImage}</div>;
};
Card.propTypes = {
  name: PropTypes.string.isRequired
};

export default Card;
