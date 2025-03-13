import { Children, ReactNode } from 'react';
import styles from './Alert.module.css';

interface Props {
  children: ReactNode;
  status: boolean;
  onClick: () => void;
}

export const Alert = ( props: Props ) => {

  const { children, status, onClick } = props;

  return (

    <div 
      className={[styles.alert, status ? styles.alertPrimary : styles.alertSecondary].join(' ')} 
      onClick={onClick}>Alert
    </div>
  )
}
