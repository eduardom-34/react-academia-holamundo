import type { ReactNode } from "react";

interface Props {
  children: ReactNode 
}

function Card( props: Props  ) {

  const { children } = props;

  return <div className="card" style={{ 
    width: '350px'
    }}>
  <div className="card-body">
    { children }
  </div>
</div>
}

interface CardBodyProps {

  title: string
  text?: string

}

export function CardBody( props: CardBodyProps ) {

  const list: string[] = [];

  const { title, text } = props;

  return (
    <>
      {list.length !== 0 && "Mi lista"}
      <h5 className="card-title">{ title }</h5>
      <p className="card-text">{ text }</p>
    </>
  );
}


export default Card;