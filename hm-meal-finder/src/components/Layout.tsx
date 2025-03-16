import { Sidebar } from "./Sidebar"
import { Searchbar } from './Searchbar';
import { DishCard } from "./DishCard";
// import { useState } from "react";
// import useHttpData from "@/hooks/useHttpData";



export const Layout = () => {

  return (
    <div className="h-screen flex flex-col">
      {/* Searchbar arriba ocupando todo el ancho */}
      <header className="w-full p-7 bg-white shadow-md">
        <Searchbar></Searchbar>
      </header>

      {/* Contenedor de Sidebar y Grid */}
      <div className="flex flex-1">
        {/* Sidebar (Izquierda) */}
        <aside className="w-1/4 bg-gray-100 p-4 border-r">
          <Sidebar></Sidebar>
        </aside>

        {/* Grid de platillos (Derecha) */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DishCard />
          </div>
        </main>
      </div>
    </div>
  );
};
