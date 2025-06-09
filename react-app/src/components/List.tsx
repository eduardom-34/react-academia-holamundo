// import type { MouseEvent } from "react";

import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

export const List = (props: Props) => {

  const { data, onSelect } = props;

  const [index, setIndex] = useState(1);

  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  }


  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li onClick={
          () => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index === i ? 'active' : ''}` }>{elemento}</li>
      ))}
    </ul>
  )
}
