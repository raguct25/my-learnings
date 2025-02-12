import { Trash, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useState } from "react";

interface Card {
  id: number;
  text: string;
}

const CarouselComponent: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([{ id: 1, text: "Card 1" }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDeleteCard = (id: number): void => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    if (currentIndex >= cards.length - 1 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Adjust index if deleting the last card
    }
  };

  const addButton = (): void => {
    if (cards.length < 5) {
      const newCard: Card = {
        id: Date.now(),
        text: `Card ${cards.length + 1}`,
      };
      setCards((prevCards) => [...prevCards, newCard]);
      setCurrentIndex(cards.length);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="flex-col">
      <div className="flex justify-center">
        <div className="flex items-center">
          <button
            onClick={goToPrevious}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-400 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="relative p-4">
          <div className="flex justify-center overflow-hidden">
            {cards.length > 0 && (
              <div
                key={cards[currentIndex].id}
                className="bg-slate-400 rounded-2xl shadow-md p-4 relative w-64 h-64"
              >
                <div className="flex justify-center h-32 items-center bg-slate-300 m-4">
                  <Image size={24} className="text-blue-400" />
                </div>
                <p className="font-medium ml-4">{cards[currentIndex].text}</p>
                <button
                  onClick={() => handleDeleteCard(cards[currentIndex].id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <Trash size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={goToNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-400 disabled:opacity-50"
            disabled={currentIndex === cards.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-slate-700" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={addButton}
          className="px-6 py-2 bg-slate-600 text-white hover:bg-slate-800 rounded-md"
        >
          Add Card
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
