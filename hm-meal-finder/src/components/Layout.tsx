import { Sidebar } from "./Sidebar"
import { Searchbar } from './Searchbar';
import { DishCard } from "./DishCard";
import { useState } from "react";
// import { useState } from "react";
// import useHttpData from "@/hooks/useHttpData";



export const Layout = () => {


  const [category, setCategory] = useState("vegan");

  const handleCategory = ( newCategory: string ) => {
    setCategory(newCategory);
  }

  return (
    <div className="h-screen flex flex-col bg-amber-50">

      <header className="w-full p-7 bg-white shadow-md">
        <Searchbar></Searchbar>
      </header>

      <div className="flex flex-1">
        
        <aside className="w-1/4 md:w-1/5 lg:w-1/6 bg-gray-100 p-4 border-r">
          <Sidebar
          sendCategory = {handleCategory}
          ></Sidebar>
        </aside>

        <main className="flex-1 p-4">
          <div className=" gap-4">
            <DishCard category={category} />
          </div>
        </main>

      </div>
    </div>
  );
};
