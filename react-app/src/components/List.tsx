import { useState } from "react";

interface ListProps {
  data: string[];
  onSelect?: (element: string) => void;
}

function List(props: ListProps, ) {

  const [index, setIndex ]= useState(1);
  
  const { data, onSelect } = props;
  
  const handleClick = (i: number, element: string) => {
    setIndex(i);
    onSelect?.(element);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((element, i) => (
          <li
            onClick={() => handleClick(i, element)}
            key={element}
            className={`list-group-item ${index == i ? 'active' : ''}`}
            >
            {element}
          </li>
        ))}
      </ul>
    </>
  )
}

export default List;