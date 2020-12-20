import React, { useState, useEffect } from "react";
import TilesSet from "./tilesArray.json";
import notVisited from "./NV.png";

const Tiles = () => {
  const [tiles, setTiles] = useState(TilesSet);
  const [currentTile, setCurrentTile] = useState({xCoordinate:tiles[0].x, yCoordinate: tiles[0].y});
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  useEffect(() => {
      console.log(currentTile)
  }, [currentTile])

  const onRight = () => {
      if(currentTile.xCoordinate === 4) alert("Can't go any further right. Sorry!");
      else if(end === true) alert("You lost!");
      else
      setTiles((oldTiles)=>{
          const current = oldTiles.find((p) => p.x === currentTile.xCoordinate && p.y === currentTile.yCoordinate);
          current.agent = false;
          console.log(current);
          setCurrentTile({xCoordinate: currentTile.xCoordinate + 1, yCoordinate: currentTile.yCoordinate});

          const newPosition = oldTiles.find((p) => p.x === currentTile.xCoordinate + 1 && p.y === currentTile.yCoordinate);
          newPosition.visited = true;
          newPosition.agent = true; 
          if(newPosition.value === "pit" || newPosition.value === "wumpus"){
              setScore(score - 1000);
              setEnd(true);
          }
          else if(newPosition.value === "gold"){
              setScore(score + 1000);
          }
          console.log(newPosition);

          return [...oldTiles];
      })
  }
  const onLeft = () => {
    if(currentTile.xCoordinate === 1) alert("Can't go any further left. Sorry!");
    else if(end === true) alert("You lost!");
    else
    setTiles((oldTiles)=>{
        const current = oldTiles.find((p) => p.x === currentTile.xCoordinate && p.y === currentTile.yCoordinate);
        current.agent = false;
        console.log(current);
        setCurrentTile({xCoordinate: currentTile.xCoordinate - 1, yCoordinate: currentTile.yCoordinate});

        const newPosition = oldTiles.find((p) => p.x === currentTile.xCoordinate - 1 && p.y === currentTile.yCoordinate);
        newPosition.visited = true;
        newPosition.agent = true; 
        if(newPosition.value === "pit" || newPosition.value === "wumpus"){
            setScore(score - 1000);
            setEnd(true);
        }
        else if(newPosition.value === "gold"){
            setScore(score + 1000);
        }
        console.log(newPosition);

        return [...oldTiles];
    })
}
const onUp = () => {
    if(currentTile.yCoordinate === 1) alert("Can't go any further up. Sorry!");
    else if(end === true) alert("You lost!");
    else
    setTiles((oldTiles)=>{
        const current = oldTiles.find((p) => p.x === currentTile.xCoordinate && p.y === currentTile.yCoordinate);
        current.agent = false;
        console.log(current);
        setCurrentTile({xCoordinate: currentTile.xCoordinate, yCoordinate: currentTile.yCoordinate - 1});

        const newPosition = oldTiles.find((p) => p.x === currentTile.xCoordinate && p.y === currentTile.yCoordinate - 1);
        newPosition.visited = true;
        newPosition.agent = true; 
        if(newPosition.value === "pit" || newPosition.value === "wumpus"){
            setScore(score - 1000);
            setEnd(true);
        }
        else if(newPosition.value === "gold"){
            setScore(score + 1000);
        }
        console.log(newPosition);

        return [...oldTiles];
    })
}
const onDown = () => {
    if(currentTile.yCoordinate === 4) alert("Can't go any further down. Sorry!");
    else if(end === true) alert("You lost!");
    else
    setTiles((oldTiles)=>{
        const current = oldTiles.find((p) => p.x === currentTile.xCoordinate && p.y === currentTile.yCoordinate);
        current.agent = false;
        console.log(current);
        setCurrentTile({xCoordinate: currentTile.xCoordinate, yCoordinate: currentTile.yCoordinate + 1});

        const newPosition = oldTiles.find((p) => p.x === currentTile.xCoordinate && p.y === currentTile.yCoordinate + 1);
        newPosition.visited = true;
        newPosition.agent = true; 
        if(newPosition.value === "pit" || newPosition.value === "wumpus"){
            setScore(score - 1000);
            setEnd(true);
        }
        else if(newPosition.value === "gold"){
            setScore(score + 1000);
        }
        console.log(newPosition);

        return [...oldTiles];
    })
}
  
  return (
    <div style={{maxWidth: 600}}>
    <h1>Score: {score}</h1> 
    <div style={{margin: 40}}>
        <button onClick={()=>onLeft()}>Left</button>
        <button onClick={()=>onUp()}>Up</button>
        <button onClick={()=>onDown()}>Down</button>
        <button onClick={()=>onRight()}>Right</button>
    </div>
     {tiles.map((tile) => {
        return (
          <div
            style={{
              display: "inline-block",
            }}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={tile.visited ? (tile.agent ? tile.image2 : tile.image1) : notVisited}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tiles;
