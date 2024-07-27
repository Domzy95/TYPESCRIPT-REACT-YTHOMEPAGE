import { Button } from "./Button";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string; // Changed from string[] to string
  onSelect: (category: string) => void;
};

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  return (
    <div className="overflow-x-hidden relative">
      {" "}
      {/* Fixed typo: 'overflox-x-hidden' to 'overflow-x-hidden' */}
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "dark" : "default"}
            onClick={() => onSelect(category)}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
