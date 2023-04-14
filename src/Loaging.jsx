import React from "react";
import "./app.css";

export default function Loaging() {
  const options = [1, 2, 3, 4];
  return (
    <div className="frontSide front-skeleton">
      <div className="flashCard-options">
        <div className="questions-sleleton">
          <div className="question-sleleton"></div>
          <div className="question-sleleton"></div>
          <div className="question-sleleton"></div>
        </div>
        <div className="options-skeleton">
          {options.map((option, index) => {
            return (
              <div className="flahCard-option" key={index}>
                <div className="option-skeleton"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
