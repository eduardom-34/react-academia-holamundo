import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useHttpData from "@/hooks/useHttpData";

export interface Meals {
  meals: Meal[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface Props {
  category: string
}


export const DishCard = ( {category = "seafood"}: Props ) => {
  

  const url: string = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const { loading, error, data } = useHttpData<Meals>(url);

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error {error}</p>
  }


  // console.log(data?.meals)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data?.meals.map(meal => (
        <Card key={meal.idMeal} className=" border-none w-full sm:w-75 md:w-80 lg:95 shadow-lg rounded-lg overflow-hidden bg-white">
          <CardHeader>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-60 object-cover rounded-lg" />
            <CardTitle
            className="text-blue-500 font-extrabold"
            >{meal.strMeal}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md">
              Ver receta
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
