import { ChevronLeft, ChevronRight } from "lucide-react";

type ButtonGroupProps = {
  previous: () => void;
  next: () => void;
  carouselState: any;
};

export const CustomButtonGroup: React.FC<ButtonGroupProps> = ({
  previous,
  next,
  carouselState,
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={previous}
        className={`p-2 rounded-full ${
          carouselState.currentSlide === 0
            ? "text-gray-300 cursor-not-allowed"
            : "text-black"
        }`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className={`p-2 rounded-full ${
          carouselState.currentSlide === carouselState.totalItems - 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-black"
        }`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
