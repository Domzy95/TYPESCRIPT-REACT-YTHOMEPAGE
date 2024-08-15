import { Button } from "./Button";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
type CategoryPillProps = {
  categories: string[];
  selectedCategory: string; // Changed from string[] to string
  onSelect: (category: string) => void;
};
const TRANSLATE_AMOUNT = 200;

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  return (
    <div className="overflow-x-hidden relative">
      <div
        style={{ transform: `translateX(${translate}px)` }}
        className="no-scrollbar flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "dark" : "default"}
            onClick={() => onSelect(category)}
            className=" py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transport w-24 h full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p1.5"
            onClick={() =>
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              })
            }
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transport w-24 h full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}

//!dodali smo puščice na vsako stran in jima dodali use state!

//? od 48 minute naprej še enkrat potrebno preglej premikanje vrstice z levo in desno puščico!
