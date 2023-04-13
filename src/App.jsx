import { useRef } from "react";
import { useFlashCard } from "./FlashCardContext";
import FlashCardList from "./FlashCardList";

function App() {
  const { catagory } = useFlashCard();
  const catagoryEle = useRef();
  function handleSubmit(e) {
    e.preventDefault();
  }
  let { SIMPLE_FLASHCARD } = useFlashCard();
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
        </form>
      </div>
      <FlashCardList />
    </div>
  );
}

export default App;
