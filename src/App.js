import "./App.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addFormdata } from "./store/data";

function App() {
  const [name, setName] = React.useState("");
  const [partida, setPartida] = React.useState("");
  const [retorno, setRetorno] = React.useState("");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addFormdata({ name, partida, retorno }));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Encontre sua Viagem</h1>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor="date">Partida</label>
        <input
          type="date"
          id="partida"
          value={partida}
          onChange={({ target }) => setPartida(target.value)}
        />
        <label htmlFor="date">Retorno</label>
        <input
          type="date"
          id="retorno"
          value={retorno}
          onChange={({ target }) => setRetorno(target.value)}
        />
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default App;
