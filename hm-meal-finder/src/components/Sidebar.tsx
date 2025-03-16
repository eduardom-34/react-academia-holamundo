import useHttpData from "@/hooks/useHttpData";
// import { Button } from "@/components/ui/button"
import { MealButton } from "./MealButton";
// import { useState } from "react";


const url: string = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";


export interface Meal {
  strCategory: string;
}

export interface Categories {
  meals: Meal[];
}

export const Sidebar = (  ) => {

  const { loading, error, data } = useHttpData<Categories>(url);
  

  // console.log({data});

  if(loading) {
    return <p>Cargando...</p>
  }

  if( error && !loading){
    return <p>Ha ocurrido un error {error}</p>
  }
  


  return (
    <div>
      <h2 className="mb-5">Categorias</h2>
      <MealButton categories={data || { meals: [] }}></MealButton>
    </div>
  )
}
