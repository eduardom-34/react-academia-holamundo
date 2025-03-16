import { Sidebar } from "./Sidebar"
import { Searchbar } from './Searchbar';
import { DishCard } from "./DishCard";
// import { useState } from "react";
// import useHttpData from "@/hooks/useHttpData";



export const Layout = () => {

  return (
    <div className="h-screen flex flex-col">
      <header className="w-full p-7 bg-white shadow-md">
        <Searchbar></Searchbar>
      </header>

      <div className="flex flex-1">
        
        <aside className="w-1/4 md:w-1/5 lg:w-1/6 bg-gray-100 p-4 border-r">
          <Sidebar></Sidebar>
        </aside>

        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DishCard />
          </div>
        </main>
      </div>
    </div>
  );
};
