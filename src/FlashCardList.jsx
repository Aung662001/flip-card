import React from "react";
import { useFlashCard } from "./FlashCardContext";
import FlashCard from "./FlashCard";
import Loaging from "./Loaging";
import "./app.css";

function FlashCardList() {
  const { questions, loading } = useFlashCard();
  return (
    <div className="card-grid">
      {!loading ? (
        questions.map((flashCard) => {
          return <FlashCard flashCard={flashCard} key={flashCard.id} />;
        })
      ) : (
        <>
          <Loaging />
          <Loaging />
          <Loaging />
          <Loaging />
          <Loaging />
          <Loaging />
        </>
      )}
    </div>
  );
}

export default FlashCardList;
