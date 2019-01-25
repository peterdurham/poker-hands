import React, { Component } from "react";

import "./App.css";
import Controls from "./Controls/Controls.js";
import Board from "./Board/Board.js";
import Hand from "./Hand/Hand.js";
import Results from "./Results/Results.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.shuffleDeckHandler = this.shuffleDeckHandler.bind(this);
    this.drawHandHandler = this.drawHandHandler.bind(this);
    this.drawBoardHandler = this.drawBoardHandler.bind(this);
    this.state = {
      deck: [],
      hand: [
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        },
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        }
      ],
      board: [
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        },
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        },
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        },
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        },
        {
          name: "blank",
          value: "blank",
          suit: "blank",
          numericalValue: "blank"
        }
      ],
      bestHand: ""
    };
  }
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
    let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let values = [
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
    let numericalValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    //populate deck
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        let cardName = values[j] + " of " + suits[i];
        let cardInstance = new Card(
          cardName,
          values[j],
          suits[i],
          numericalValues[j]
        );
        deck.push(cardInstance);
      }
    }
    //reset hand and board
    let resetHand = [
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" },
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" }
    ];
    let resetBoard = [
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" },
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" },
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" },
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" },
      { name: "blank", value: "blank", suit: "blank", numericalValue: "blank" }
    ];
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
      let card1Index = Math.floor(Math.random() * deckCopy.length);
      let card1 = deckCopy[card1Index];
      deckCopy.splice(card1Index, 1);
      let card2Index = Math.floor(Math.random() * deckCopy.length);
      let card2 = deckCopy[card2Index];
      deckCopy.splice(card2Index, 1);
      hand = [card1, card2];
    }
    let bestHand = this.determineBestHand(hand, []);

    this.setState({ hand, deck: deckCopy, bestHand: bestHand });
  };
  drawBoardHandler = () => {
    let currentBoard = this.state.board;
    let deckCopy = Object.assign([], this.state.deck);
    let boardCopy = Object.assign([], this.state.board);
    if (currentBoard[0].name === "blank") {
      let board1Index = Math.floor(Math.random() * deckCopy.length);
      let board1 = deckCopy[board1Index];
      deckCopy.splice(board1Index, 1);
      let board2Index = Math.floor(Math.random() * deckCopy.length);
      let board2 = deckCopy[board2Index];
      deckCopy.splice(board2Index, 1);
      let board3Index = Math.floor(Math.random() * deckCopy.length);
      let board3 = deckCopy[board3Index];
      deckCopy.splice(board3Index, 1);
      boardCopy.splice(0, 3);
      boardCopy.unshift(board3);
      boardCopy.unshift(board2);
      boardCopy.unshift(board1);

      let bestHand = this.determineBestHand(this.state.hand, boardCopy);

      this.setState({ board: boardCopy, deck: deckCopy, bestHand: bestHand });
    } else if (currentBoard[3].name === "blank") {
      let board4Index = Math.floor(Math.random() * deckCopy.length);
      let board4 = deckCopy[board4Index];
      deckCopy.splice(board4Index, 1);
      boardCopy.splice(3, 1, board4);

      let bestHand = this.determineBestHand(this.state.hand, boardCopy);

      this.setState({ board: boardCopy, deck: deckCopy, bestHand: bestHand });
    } else if (currentBoard[4].name === "blank") {
      let board5Index = Math.floor(Math.random() * deckCopy.length);
      let board5 = deckCopy[board5Index];
      deckCopy.splice(board5Index, 1);
      boardCopy.splice(4, 1, board5);

      let bestHand = this.determineBestHand(this.state.hand, boardCopy);

      this.setState({ board: boardCopy, deck: deckCopy, bestHand: bestHand });
    }
  };
  determineBestHand = (hand, board) => {
    //combine board and hand
    let allCards = hand.concat(board);
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
      let straight = [i, i + 1, i + 2, i + 3, i + 4];
      possibleStraights.push(straight);
    }
    possibleStraights.push([14, 2, 3, 4, 5]);

    //enumerate card cardValues and suits
    let allValues = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let allSuits = ["Spades", "Hearts", "Diamonds", "Clubs"];

    //check hand for royal flush
    let broadway = [10, 11, 12, 13, 14];
    for (let i = 0; i < allSuits.length; i++) {
      let suitCount = cardSuits.filter(suit => suit === allSuits[i]);
      if (suitCount.length > 4) {
        let flushCards = allCards.filter(card => card.suit === allSuits[i]);
        let flushValues = [];
        flushCards.forEach(card => {
          flushValues.push(card.numericalValue);
        });
        let straightMade = broadway.every(
          card => flushValues.indexOf(card) > -1
        );
        if (straightMade === true) {
          return `${allSuits[i]} Royal Flush`;
        }
      }
    }
    //check hand for straight flush
    for (let i = 0; i < allSuits.length; i++) {
      let suitCount = cardSuits.filter(suit => suit === allSuits[i]);
      if (suitCount.length > 4) {
        let flushCards = allCards.filter(card => card.suit === allSuits[i]);
        let flushValues = [];
        flushCards.forEach(card => {
          flushValues.push(card.numericalValue);
        });
        for (let j = 0; j < possibleStraights.length; j++) {
          let straightMade = possibleStraights[j].every(
            card => flushValues.indexOf(card) > -1
          );
          if (straightMade === true) {
            let straight = possibleStraights[j];
            let maxValue = Math.max(...straight);
            let cardName = this.convertValueToName(maxValue);
            return `${cardName}-high ${allSuits[i]} Straight Flush`;
          }
        }
      }
    }
    //check hand for four of a kind
    for (let i = 0; i < allValues.length; i++) {
      let cardCount = cardValues.filter(card => card === allValues[i]);
      if (cardCount.length === 4) {
        let cardName = this.convertValueToPluralName(cardCount[0]);
        return `Four of a kind ${cardName}s`;
      }
    }
    //check hand for full house
    for (let i = 0; i < allValues.length; i++) {
      let firstCount = cardValues.filter(card => card === allValues[i]);
      if (firstCount.length === 3) {
        let higherPair = this.convertValueToPluralName(firstCount[0]);
        let remainingValues = cardValues.filter(card => card !== allValues[i]);
        for (let j = 0; j < allValues.length; j++) {
          let secondCount = remainingValues.filter(
            card => card === allValues[j]
          );
          if (secondCount.length === 2) {
            let lowerPair = this.convertValueToPluralName(secondCount[0]);
            return `Full House, ${higherPair}s over ${lowerPair}s`;
          }
        }
      }
    }
    //check hand for flush
    for (let i = 0; i < allSuits.length; i++) {
      let suitCount = cardSuits.filter(suit => suit === allSuits[i]);
      if (suitCount.length > 4) {
        let flushCards = allCards.filter(card => card.suit === allSuits[i]);
        let flushValues = [];
        flushCards.forEach(card => {
          flushValues.push(card.numericalValue);
        });
        let flushMax = Math.max(...flushValues);
        let cardName = this.convertValueToName(flushMax);
        return `${cardName}-high ${allSuits[i]} Flush`;
      }
    }
    //check hand for straight
    for (let i = 0; i < possibleStraights.length; i++) {
      let straightMade = possibleStraights[i].every(
        card => cardValues.indexOf(card) > -1
      );
      if (straightMade === true) {
        let straight = possibleStraights[i];
        let maxValue = Math.max(...straight);
        let cardName = this.convertValueToName(maxValue);
        return `${cardName}-high Straight`;
      }
    }
    //check hand for three of a kind
    for (let i = 0; i < allValues.length; i++) {
      let cardCount = cardValues.filter(card => card === allValues[i]);
      if (cardCount.length === 3) {
        let cardName = this.convertValueToPluralName(cardCount[0]);
        return `Three of a kind, ${cardName}s`;
      }
    }
    //check hand for two pair
    for (let i = 0; i < allValues.length; i++) {
      let firstCount = cardValues.filter(card => card === allValues[i]);
      if (firstCount.length === 2) {
        let higherPair = this.convertValueToPluralName(firstCount[0]);
        let remainingValues = cardValues.filter(card => card !== allValues[i]);
        for (let j = 0; j < allValues.length; j++) {
          let secondCount = remainingValues.filter(
            card => card === allValues[j]
          );
          if (secondCount.length === 2) {
            let lowerPair = this.convertValueToPluralName(secondCount[0]);
            return `Two Pair, ${higherPair}s over ${lowerPair}s`;
          }
        }
      }
    }
    //check hand for pair
    for (let i = 0; i < allValues.length; i++) {
      let cardCount = cardValues.filter(card => card === allValues[i]);
      if (cardCount.length === 2) {
        let cardName = this.convertValueToPluralName(cardCount[0]);
        return `Pair of ${cardName}s`;
      }
    }
    //check hand for high card
    for (let i = 0; i < allValues.length; i++) {
      if (cardValues.indexOf(allValues[i]) >= 0) {
        let cardName = this.convertValueToName(allValues[i]);
        return `High Card ${cardName}`;
      }
    }
  };

  convertValueToName = value => {
    if (value === 2) {
      return "Two";
    } else if (value === 3) {
      return "Three";
    } else if (value === 4) {
      return "Four";
    } else if (value === 5) {
      return "Five";
    } else if (value === 6) {
      return "Six";
    } else if (value === 7) {
      return "Seven";
    } else if (value === 8) {
      return "Eight";
    } else if (value === 9) {
      return "Nine";
    } else if (value === 10) {
      return "Ten";
    } else if (value === 11) {
      return "Jack";
    } else if (value === 12) {
      return "Queen";
    } else if (value === 13) {
      return "King";
    } else if (value === 14) {
      return "Ace";
    }
  };

  convertValueToPluralName = value => {
    if (value === 2) {
      return "Two";
    } else if (value === 3) {
      return "Three";
    } else if (value === 4) {
      return "Four";
    } else if (value === 5) {
      return "Five";
    } else if (value === 6) {
      return "Sixe";
    } else if (value === 7) {
      return "Seven";
    } else if (value === 8) {
      return "Eight";
    } else if (value === 9) {
      return "Nine";
    } else if (value === 10) {
      return "Ten";
    } else if (value === 11) {
      return "Jack";
    } else if (value === 12) {
      return "Queen";
    } else if (value === 13) {
      return "King";
    } else if (value === 14) {
      return "Ace";
    }
  };

  render() {
    return (
      <div className="App">
        <br />
        <h1>Poker Hand Simulator</h1>
        <div className="card-display">
          <Board
            board1={this.state.board[0].name}
            board2={this.state.board[1].name}
            board3={this.state.board[2].name}
            board4={this.state.board[3].name}
            board5={this.state.board[4].name}
          />
          <Hand
            hand1={this.state.hand[0].name}
            hand2={this.state.hand[1].name}
          />
        </div>
        <div className="controls-display">
          <Results bestHand={this.state.bestHand} />
          <Controls
            shuffle={this.shuffleDeckHandler}
            dealHand={this.drawHandHandler}
            dealBoard={this.drawBoardHandler}
            handStatus={this.state.hand[0].name}
            flopStatus={this.state.board[0].name}
            turnStatus={this.state.board[3].name}
            riverStatus={this.state.board[4].name}
          />
        </div>
      </div>
    );
  }
}

export default App;
