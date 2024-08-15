import { PageHeader } from "./layouts/PageHeader";
import { CategoryPills } from "./components/CategoryPills";
import { categories } from "./data/home";
import { useState } from "react";
function App() {
  //!ko klikneš na gumb se pokaže črna barva gumba! t
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="flex flex-grow overflow-auto">
          <div>Sidebar</div> {/* Sidebar */}
          <div className="flex flex-col flex-grow p-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <div className="grid gap-4 grid-cols[repeat(auto-fill,minmax(300px,1fr))]">
              <VideoGridItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//!propse damo v app ker bodo te propse rabla cela aplikacija in se od tam naprej passajo
