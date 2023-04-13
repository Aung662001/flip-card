import React, { useEffect, useState, useRef } from "react";
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
  const [catagory, setCatagory] = useState([]);
  const catagoryEle = useRef();
  const questionNumberRef = useRef();
  console.log(catagory);
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
  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCatagory(res.data.trivia_categories));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get("https://opentdb.com/api.php?", {
        params: {
          amount: questionNumberRef.current.value,
          catagory: catagoryEle.current.value,
        },
      })
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
  }
  function stringDecoder(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.innerText;
  }
  return (
    <FlashCardContext.Provider
      value={{
        questions,
        loading,
        catagory,
        handleSubmit,
        catagoryEle,
        questionNumberRef,
      }}
    >
      {children}
    </FlashCardContext.Provider>
  );
}
