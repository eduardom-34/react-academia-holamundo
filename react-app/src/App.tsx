import { useState } from "react";
import { SendButton } from "./components/SendButton";

export const App = () => {

  const [sent, setSent] = useState(false);
  const handleClick = () => setSent(true);

  return (
    <SendButton  
      sent={sent} 
      onClick={handleClick}>
      Enviar
    </SendButton>
  )
}
