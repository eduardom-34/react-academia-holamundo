// import type { MouseEvent } from "react";

type Props = {
  data: string[]
};

export const List = (props: Props) => {

  const handleClick = ( e: string ) => {
    console.log(e)
  }

  const { data } = props;

  return (
    <ul className="list-group">
      {data.map(elemento => (
        <li onClick={ () => handleClick(elemento) } key={elemento} className="list-group-item">{elemento}</li>
      ))}
    </ul>
  )
}
