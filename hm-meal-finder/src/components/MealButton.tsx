import { Button } from "@/components/ui/button"
import { useState } from "react";


export interface Meal {
  strCategory: string;
}

export interface Categories {
  meals: Meal[];
}

interface Props {
  categories: Categories;
  sendCategory: ( category: string) => void
}

export const MealButton = ({ categories, sendCategory }: Props) => {

  const [selected, setSelected] = useState(0);


  return (
    <div>
      {categories?.meals.map((c, index) => (
        <div key={index} className="mb-4"
        >
          <Button
            variant={selected === index ? "outline" : "ghost"}
            className={selected === index ? "bg-blue-400 text-white font-bold" : ""}
            onClick={() => {
              setSelected(index);
              sendCategory(c.strCategory);
            }}
            
          >{c.strCategory}</Button>
        </div>

      ))}
    </div>
  )
}
