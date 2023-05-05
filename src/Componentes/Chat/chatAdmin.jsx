import { db } from "../../Firebase/config";
import { auth } from "./../../Firebase/config";
import swal from "sweetalert";
import { useChat } from "./useChat";
import { useState } from "react";

function chatAdmin() {
  // const [message, setMessage] = useState("");
  const { chat } = useChat();
  console.log(chat);
  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      const user = auth.currentUser;
      mensaje(message, user.uid, user);
      swal({
        title: "OK",
        text: `mensaje enviado`,
        icon: "succes",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: `Try again`,
        icon: "error",
      });
    }
  };

  console.log(db);
  return (
    <div>
      <div className="costado1">
        <h1>Chat BookStore</h1>
        <form>
          <input
            type="text"
            value={message}
            placeholder="Escribir Mensaje"
            className="texto1"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="boton1" onClick={sendMessage}>
            Enviar
          </button>
        </form>
        <ul></ul>
      </div>
    </div>
  );
}

export default chatAdmin;
