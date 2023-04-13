import React, { useEffect, useRef, useState } from "react";
import { useFlashCard } from "./FlashCardContext";
import "./app.css";

export default function FlashCard({ flashCard }) {
  const frontElement = useRef();
  const backElement = useRef();
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  useEffect(setMaxHeight, [
    flashCard.answer,
    flashCard.question,
    flashCard.options,
  ]);
  function setMaxHeight() {
    const frontHeight = frontElement.current.getBoundingClientRect().height;
    // const backHeight = backElement.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, /*backHeight,*/ 100));
  }
  return (
    <div
      onClick={() => setFlip(!flip)}
      className={`card ${flip ? "flip" : ""}`}
      style={{ height: height }}
    >
      <div className="frontSide" ref={frontElement}>
        {flashCard.question}
        <div className="flashCard-options">
          {flashCard.options.map((option, index) => {
            return (
              <div className="flahCard-option" key={index}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="backSide" ref={backElement}>
        {flashCard.answer}
      </div>
    </div>
  );
}
