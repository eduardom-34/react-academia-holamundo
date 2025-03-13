import { ReactNode } from "react";
import styles from './SendButton.module.css'
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";



interface SendButtonProps {
  children: ReactNode
  sent: boolean;
  onClick: () => void;

}


export const SendButton = (props: SendButtonProps) => {

  const { children, sent, onClick } = props;

  return (
    <button
      disabled={sent}
      className={[styles.button, styles.buttonPrimary].join(' ')}
      onClick={onClick}
    >
      {sent ? "Enviado" : children} {" "}
      <span style={{ position: 'relative', top: '2px' }}>
        {sent ? <FaCheck color="white"/> : <IoIosSend color="white" />}
        </span>
    </button>
  )
}
