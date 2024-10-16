import React, {useState, useEffect} from "react"
import './App.css'
import Axios from "axios";

import Card from "./components/cards/card";

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = value => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
      console.log(Response);
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/get").then((response) => {
      setListGames(response.data);
    });
  });

  return (
    <div className="app--container">
      <div className="register--container">
        <h1>Scrim Shop</h1>
        <input 
          type="text" 
          name="name"  
          placeholder="Nome" 
          className="register--input"
          onChange={handleChangeValues}
        />
        <input 
          type="text" 
          name="cost"  
          placeholder="Preço" 
          className="register--input"
          onChange={handleChangeValues}
        />
        <input 
          type="text" 
          name="category"  
          placeholder="Categoria" 
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
      
      { typeof listGames !== "undefined" && listGames.map((value) =>  {
        return <Card 
          key={value.idgames}
          listCard={listGames}
          setListCard={setListGames}
          id={value.idgames}
          name={value.name}
          price={value.price}
          category={value.category}
        ></Card>
      })}
    </div>
  )
}

export default App
