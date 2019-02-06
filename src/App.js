import React, { Component } from "react";

import "./App.css";
import Controls from "./Controls/Controls.js";
import Board from "./Board/Board.js";
import Hand from "./Hand/Hand.js";
import Results from "./Results/Results.js";

const blankCard = {
  name: "blank",
  value: "blank",
  suit: "blank",
  numericalValue: "blank"
};

class App extends Component {
  state = {
    deck: [],
    hand: [blankCard, blankCard],
    board: [blankCard, blankCard, blankCard, blankCard, blankCard],
    bestHand: ""
  };
  componentDidMount() {
    this.shuffleDeckHandler();
  }

  shuffleDeckHandler = () => {
    function Card(name, value, suit, numericalValue) {
      this.name = name;
      this.value = value;
      this.suit = suit;
      this.numericalValue = numericalValue;
    }
    let deck = [];
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const values = [
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "Queen",
      "King",
      "Ace"
    ];
    const numericalValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    //populate deck
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const cardName = values[j] + " of " + suits[i];
        const cardInstance = new Card(
          cardName,
          values[j],
          suits[i],
          numericalValues[j]
        );
        deck.push(cardInstance);
      }
    }
    const blankCard = {
      name: "blank",
      value: "blank",
      suit: "blank",
      numericalValue: "blank"
    };
    //reset hand and board
    const resetHand = [blankCard, blankCard];
    const resetBoard = [blankCard, blankCard, blankCard, blankCard, blankCard];
    this.setState({
      deck: deck,
      hand: resetHand,
      board: resetBoard,
      bestHand: ""
    });
  };
  drawHandHandler = () => {
    let deckCopy = Object.assign([], this.state.deck);

    let hand = [];
    if (deckCopy.length === 52) {
      const card1Index = Math.floor(Math.random() * deckCopy.length);
      const card1 = deckCopy[card1Index];
      deckCopy.splice(card1Index, 1);
      const card2Index = Math.floor(Math.random() * deckCopy.length);
      const card2 = deckCopy[card2Index];
      deckCopy.splice(card2Index, 1);
      hand = [card1, card2];
    }
    const bestHand = this.determineBestHand(hand, []);

    this.setState({ hand, deck: deckCopy, bestHand: bestHand });
  };
  drawBoardHandler = () => {
    const currentBoard = this.state.board;
    let deckCopy = Object.assign([], this.state.deck);
    let boardCopy = Object.assign([], this.state.board);
    if (currentBoard[0].name === "blank") {
      const board1Index = Math.floor(Math.random() * deckCopy.length);
      const board1 = deckCopy[board1Index];
      deckCopy.splice(board1Index, 1);
      const board2Index = Math.floor(Math.random() * deckCopy.length);
      const board2 = deckCopy[board2Index];
      deckCopy.splice(board2Index, 1);
      const board3Index = Math.floor(Math.random() * deckCopy.length);
      const board3 = deckCopy[board3Index];
      deckCopy.splice(board3Index, 1);
      boardCopy.splice(0, 3);
      boardCopy.unshift(board3);
      boardCopy.unshift(board2);
      boardCopy.unshift(board1);

      const bestHand = this.determineBestHand(this.state.hand, boardCopy);

      this.setState({ board: boardCopy, deck: deckCopy, bestHand: bestHand });
    } else if (currentBoard[3].name === "blank") {
      const board4Index = Math.floor(Math.random() * deckCopy.length);
      const board4 = deckCopy[board4Index];
      deckCopy.splice(board4Index, 1);
      boardCopy.splice(3, 1, board4);

      const bestHand = this.determineBestHand(this.state.hand, boardCopy);

      this.setState({ board: boardCopy, deck: deckCopy, bestHand: bestHand });
    } else if (currentBoard[4].name === "blank") {
      const board5Index = Math.floor(Math.random() * deckCopy.length);
      const board5 = deckCopy[board5Index];
      deckCopy.splice(board5Index, 1);
      boardCopy.splice(4, 1, board5);

      const bestHand = this.determineBestHand(this.state.hand, boardCopy);

      this.setState({ board: boardCopy, deck: deckCopy, bestHand: bestHand });
    }
  };
  determineBestHand = (hand, board) => {
    //combine board and hand
    const allCards = hand.concat(board);
    //create values array
    let cardValues = [];
    allCards.forEach(card => {
      cardValues.push(card.numericalValue);
    });
    //create suits array
    let cardSuits = [];
    allCards.forEach(card => {
      cardSuits.push(card.suit);
    });
    //enumerate possible straights
    let possibleStraights = [];
    for (let i = 10; i > 1; i--) {
      const straight = [i, i + 1, i + 2, i + 3, i + 4];
      possibleStraights.push(straight);
    }
    possibleStraights.push([14, 2, 3, 4, 5]);

    //enumerate card cardValues and suits
    const allValues = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    const allSuits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    //check hand for royal flush
    const broadway = [10, 11, 12, 13, 14];
    for (let i = 0; i < allSuits.length; i++) {
      const suitCount = cardSuits.filter(suit => suit === allSuits[i]);
      if (suitCount.length > 4) {
        const flushCards = allCards.filter(card => card.suit === allSuits[i]);
        let flushValues = [];
        flushCards.forEach(card => {
          flushValues.push(card.numericalValue);
        });
        const straightMade = broadway.every(
          card => flushValues.indexOf(card) > -1
        );
        if (straightMade === true) {
          return `${allSuits[i]} Royal Flush`;
        }
      }
    }
    //check hand for straight flush
    for (let i = 0; i < allSuits.length; i++) {
      const suitCount = cardSuits.filter(suit => suit === allSuits[i]);
      if (suitCount.length > 4) {
        const flushCards = allCards.filter(card => card.suit === allSuits[i]);
        let flushValues = [];
        flushCards.forEach(card => {
          flushValues.push(card.numericalValue);
        });
        for (let j = 0; j < possibleStraights.length; j++) {
          const straightMade = possibleStraights[j].every(
            card => flushValues.indexOf(card) > -1
          );
          if (straightMade === true) {
            const straight = possibleStraights[j];
            const maxValue = Math.max(...straight);
            const cardName = this.convertValueToName(maxValue);
            return `${cardName}-high ${allSuits[i]} Straight Flush`;
          }
        }
      }
    }
    //check hand for four of a kind
    for (let i = 0; i < allValues.length; i++) {
      const cardCount = cardValues.filter(card => card === allValues[i]);
      if (cardCount.length === 4) {
        const cardName = this.convertValueToPluralName(cardCount[0]);
        return `Four of a kind ${cardName}s`;
      }
    }
    //check hand for full house
    for (let i = 0; i < allValues.length; i++) {
      const firstCount = cardValues.filter(card => card === allValues[i]);
      if (firstCount.length === 3) {
        const higherPair = this.convertValueToPluralName(firstCount[0]);
        const remainingValues = cardValues.filter(
          card => card !== allValues[i]
        );
        for (let j = 0; j < allValues.length; j++) {
          const secondCount = remainingValues.filter(
            card => card === allValues[j]
          );
          if (secondCount.length === 2) {
            const lowerPair = this.convertValueToPluralName(secondCount[0]);
            return `Full House, ${higherPair}s over ${lowerPair}s`;
          }
        }
      }
    }
    //check hand for flush
    for (let i = 0; i < allSuits.length; i++) {
      const suitCount = cardSuits.filter(suit => suit === allSuits[i]);
      if (suitCount.length > 4) {
        const flushCards = allCards.filter(card => card.suit === allSuits[i]);
        let flushValues = [];
        flushCards.forEach(card => {
          flushValues.push(card.numericalValue);
        });
        const flushMax = Math.max(...flushValues);
        const cardName = this.convertValueToName(flushMax);
        return `${cardName}-high ${allSuits[i]} Flush`;
      }
    }
    //check hand for straight
    for (let i = 0; i < possibleStraights.length; i++) {
      const straightMade = possibleStraights[i].every(
        card => cardValues.indexOf(card) > -1
      );
      if (straightMade === true) {
        const straight = possibleStraights[i];
        const maxValue = Math.max(...straight);
        const cardName = this.convertValueToName(maxValue);
        return `${cardName}-high Straight`;
      }
    }
    //check hand for three of a kind
    for (let i = 0; i < allValues.length; i++) {
      const cardCount = cardValues.filter(card => card === allValues[i]);
      if (cardCount.length === 3) {
        const cardName = this.convertValueToPluralName(cardCount[0]);
        return `Three of a kind, ${cardName}s`;
      }
    }
    //check hand for two pair
    for (let i = 0; i < allValues.length; i++) {
      const firstCount = cardValues.filter(card => card === allValues[i]);
      if (firstCount.length === 2) {
        const higherPair = this.convertValueToPluralName(firstCount[0]);
        const remainingValues = cardValues.filter(
          card => card !== allValues[i]
        );
        for (let j = 0; j < allValues.length; j++) {
          const secondCount = remainingValues.filter(
            card => card === allValues[j]
          );
          if (secondCount.length === 2) {
            const lowerPair = this.convertValueToPluralName(secondCount[0]);
            return `Two Pair, ${higherPair}s over ${lowerPair}s`;
          }
        }
      }
    }
    //check hand for pair
    for (let i = 0; i < allValues.length; i++) {
      const cardCount = cardValues.filter(card => card === allValues[i]);
      if (cardCount.length === 2) {
        const cardName = this.convertValueToPluralName(cardCount[0]);
        return `Pair of ${cardName}s`;
      }
    }
    //check hand for high card
    for (let i = 0; i < allValues.length; i++) {
      if (cardValues.indexOf(allValues[i]) >= 0) {
        const cardName = this.convertValueToName(allValues[i]);
        return `High Card ${cardName}`;
      }
    }
  };

  convertValueToName = value => {
    switch (value) {
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6:
        return "Six";
      case 7:
        return "Seven";
      case 8:
        return "Eight";
      case 9:
        return "Nine";
      case 10:
        return "Ten";
      case 11:
        return "Jack";
      case 12:
        return "Queen";
      case 13:
        return "King";
      case 14:
        return "Ace";
      default:
    }
  };

  convertValueToPluralName = value => {
    if (value === 6) {
      return "Sixe";
    } else {
      return this.convertValueToName(value);
    }
  };

  render() {
    return (
      <div className="App">
        <br />
        <h1>Poker Hand Simulator</h1>
        <div className="card-display">
          <Board board={this.state.board} />
          <Hand handCards={this.state.hand} />
        </div>
        <div className="controls-display">
          <Results bestHand={this.state.bestHand} />
          <Controls
            shuffle={this.shuffleDeckHandler}
            dealHand={this.drawHandHandler}
            dealBoard={this.drawBoardHandler}
            handStatus={this.state.hand[0].name}
            boardStatus={this.state.board}
          />
        </div>
      </div>
    );
  }
}

export default App;
