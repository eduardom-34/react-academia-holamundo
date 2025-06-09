// import type { MouseEvent } from "react";

import { useState } from "react";

type Props = {
  data: string[]
};

export const List = (props: Props) => {

  const [index, setIndex] = useState(1);

  const handleClick = (i: number) => {
    setIndex(i);
  }

  const { data } = props;

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li onClick={
          () => handleClick(i)}
          key={elemento}
          className={`list-group-item ${index === i ? 'active' : ''}` }>{elemento}</li>
      ))}
    </ul>
  )
}
