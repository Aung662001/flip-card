import { useRef } from "react";
import { useFlashCard } from "./FlashCardContext";
import FlashCardList from "./FlashCardList";

function App() {
  const { catagory, handleSubmit, questionNumberRef, catagoryEle } =
    useFlashCard();

  return (
    <div className="container">
      <div className="header">
        <form onSubmit={handleSubmit} className="catagory-form">
          <div className="form-group">
            <label htmlFor="catagory">Catagory</label>
            <select id="catagory-select" ref={catagoryEle}>
              {catagory.map((cat) => {
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="question-number">Question Number</label>
            <input
              type="number"
              step={1}
              defaultValue={10}
              id="question-number"
              ref={questionNumberRef}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn ">
              Generate
            </button>
          </div>
        </form>
      </div>
      <FlashCardList />
    </div>
  );
}

export default App;
