import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const FlashCardContext = createContext();

const SIMPLE_FLASHCARD = [];

export function useFlashCard() {
  return useContext(FlashCardContext);
}

export default function FlashCardProvider({ children }) {
  const [questions, setQuestions] = useState(SIMPLE_FLASHCARD);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=18")
      .then((res) => {
        console.log(res.data.results);
        setLoading(false);
        setQuestions(
          res.data.results.map((question, index) => {
            const correctAns = stringDecoder(question.correct_answer);
            const options = [
              ...question.incorrect_answers.map((d) => stringDecoder(d)),
              correctAns,
            ];
            return {
              id: `${index}+ ${new Date()}`,
              question: stringDecoder(question.question),
              answer: stringDecoder(question.correct_answer),
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }, []);

  function stringDecoder(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.innerText;
  }
  return (
    <FlashCardContext.Provider value={{ questions, loading }}>
      {children}
    </FlashCardContext.Provider>
  );
}
