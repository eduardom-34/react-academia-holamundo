import { ReactNode } from "react"
// import styles from './Button.module.css';
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";




type BtnProps = {
  $isLoading: boolean;
}

const Btn = styled.button<BtnProps>`
  background-color: ${props => props.$isLoading ? 'gray' : 'red'};
  padding: 25px 30px;
`;

type props = {
  children: ReactNode;
  $isLoading: boolean;
  onClick: () => void;
};

// console.log(styles);

export const Button = ( props: props) => {

  const { children, $isLoading, onClick } = props;

  return (
    <Btn onClick={onClick} disabled={$isLoading} $isLoading={$isLoading}
      >
      { $isLoading ? 'Cargando...' : children }
      <FaRegThumbsUp color="blue" size={40}  />
    </Btn>
  );
}
