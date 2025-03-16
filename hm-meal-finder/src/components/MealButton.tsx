import { Button } from "@/components/ui/button"
import { useState } from "react";


export interface Meal {
  strCategory: string;
}

export interface Categories {
  meals: Meal[];
}

interface Props {
  categories: Categories
}

export const MealButton = ({ categories }: Props) => {

  const [selected, setSelected] = useState(0);


  return (
    <div>
      {categories?.meals.map((c, index) => (
        <div key={index} className="mb-4"
        >
          <Button
            variant={selected === index ? "outline" : "ghost"}
            className={selected === index ? "bg-blue-400 text-white" : ""}
            onClick={() => setSelected(index)}
          >{c.strCategory}</Button>
        </div>

      ))}
    </div>
  )
}
