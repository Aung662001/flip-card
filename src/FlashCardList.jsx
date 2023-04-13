import React from "react";
import { useFlashCard } from "./FlashCardContext";
import FlashCard from "./FlashCard";

function FlashCardList() {
  const { questions, loading } = useFlashCard();
  return (
    <div className="card-grid">
      {!loading
        ? questions.map((flashCard) => {
            return <FlashCard flashCard={flashCard} key={flashCard.id} />;
          })
        : "Loading..."}
    </div>
  );
}

export default FlashCardList;
