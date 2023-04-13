import { useFlashCard } from "./FlashCardContext";
import FlashCardList from "./FlashCardList";

function App() {
  let { SIMPLE_FLASHCARD } = useFlashCard();
  return (
    <div className="container">
      <FlashCardList />
    </div>
  );
}

export default App;
