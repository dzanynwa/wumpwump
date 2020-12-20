import React, { useState, useEffect } from "react";
import gameMoves from "./gameMoves.json";
import NotVisitedImage from "./NotVisited.png";
import { Button, ButtonContainer, Container, Score, Title, ImageContainer, Image } from './style';

const Game = () => {
  const [tiles, setTiles] = useState(gameMoves);
  const [currentPosition, setCurrentPosition] = useState({xPosition:tiles[0].x, yPosition: tiles[0].y});
  const [endGame, setEndGame] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  useEffect(() => {
      console.log("Update")
  }, [currentPosition])

  const Move = (where) =>{
      if(where==="R"){
        if(currentPosition.xPosition === 4) alert("Try moving where it makes sense");
        else if(endGame === true) alert("Ups, you lost...");
        else
        setTiles((previousState)=>{
            const current = previousState.find((p) => p.x === currentPosition.xPosition && p.y === currentPosition.yPosition);
            current.isAgent = false;
            setCurrentPosition({xPosition: currentPosition.xPosition + 1, yPosition: currentPosition.yPosition});
  
            const newStateTile = previousState.find((p) => p.x === currentPosition.xPosition + 1 && p.y === currentPosition.yPosition);
            newStateTile.visited = true;
            newStateTile.isAgent = true; 
            if(newStateTile.value === "pit" || newStateTile.value === "wumpus"){
                setPlayerScore(playerScore - 1000);
                setEndGame(true);
            }
            else if(newStateTile.value === "gold"){
                setPlayerScore(playerScore + 1000);
            }
  
            return [...previousState];
        })
      }
      else if(where === "L"){
        if(currentPosition.xPosition === 1) alert("Try moving where it makes sense");
        else if(endGame === true) alert("Ups, you lost...");
        else
        setTiles((previousState)=>{
            const current = previousState.find((p) => p.x === currentPosition.xPosition && p.y === currentPosition.yPosition);
            current.isAgent = false;
            setCurrentPosition({xPosition: currentPosition.xPosition - 1, yPosition: currentPosition.yPosition});
    
            const newStateTile = previousState.find((p) => p.x === currentPosition.xPosition - 1 && p.y === currentPosition.yPosition);
            newStateTile.visited = true;
            newStateTile.isAgent = true; 
            if(newStateTile.value === "pit" || newStateTile.value === "wumpus"){
                setPlayerScore(playerScore - 1000);
                setEndGame(true);
            }
            else if(newStateTile.value === "gold"){
                setPlayerScore(playerScore + 1000);
            }
    
            return [...previousState];
        })
      }
      else if(where === "U"){
        if(currentPosition.yPosition === 1) alert("Try moving where it makes sense");
        else if(endGame === true) alert("Ups, you lost...");
        else
        setTiles((previousState)=>{
            const current = previousState.find((p) => p.x === currentPosition.xPosition && p.y === currentPosition.yPosition);
            current.isAgent = false;
            setCurrentPosition({xPosition: currentPosition.xPosition, yPosition: currentPosition.yPosition - 1});
    
            const newStateTile = previousState.find((p) => p.x === currentPosition.xPosition && p.y === currentPosition.yPosition - 1);
            newStateTile.visited = true;
            newStateTile.isAgent = true; 
            if(newStateTile.value === "pit" || newStateTile.value === "wumpus"){
                setPlayerScore(playerScore - 1000);
                setEndGame(true);
            }
            else if(newStateTile.value === "gold"){
                setPlayerScore(playerScore + 1000);
            }
    
            return [...previousState];
        })
      }
      else if (where === "D"){
        if(currentPosition.yPosition === 4) alert("Try moving where it makes sense");
        else if(endGame === true) alert("Ups, you lost...");
        else
        setTiles((previousState)=>{
            const current = previousState.find((p) => p.x === currentPosition.xPosition && p.y === currentPosition.yPosition);
            current.isAgent = false;
            setCurrentPosition({xPosition: currentPosition.xPosition, yPosition: currentPosition.yPosition + 1});
    
            const newStateTile = previousState.find((p) => p.x === currentPosition.xPosition && p.y === currentPosition.yPosition + 1);
            newStateTile.visited = true;
            newStateTile.isAgent = true; 
            if(newStateTile.value === "gold"){
                setPlayerScore(playerScore + 1000);
            }
            else if(newStateTile.value === "pit" || newStateTile.value === "wumpus"){
                setPlayerScore(playerScore - 1000);
                setEndGame(true);
            }
    
            return [...previousState];
        })
      }
  }
  
  return (
    <Container>
    <Title>Wumpus World</Title>
    <Score>Player Score: {playerScore}</Score> 
    <ButtonContainer>
        <Button onClick={()=>Move("L")}>Left</Button>
        <Button onClick={()=>Move("U")}>Up</Button>
        <Button onClick={()=>Move("D")}>Down</Button>
        <Button onClick={()=>Move("R")}>Right</Button>
    </ButtonContainer>
     {tiles.map((tile) => {
        return (
          <ImageContainer>
            <Image
              src={tile.visited ? (!tile.isAgent ? tile.image : tile.imageVisited) : NotVisitedImage}
            />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default Game;
