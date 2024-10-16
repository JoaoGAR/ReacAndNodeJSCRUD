import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

export default function Card(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };

    return (
        <>
            <FormDialog 
                open={open}
                setOpen={setOpen}
                id={props.id}
                title={props.name}
                cost={props.price}
                category={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
            />
            <div className="card--container" onClick={() => handleClickCard()}>
                <h1 className="card--title">{props.name}</h1>
                <p className="card--category">{props.category}</p>
                <p className="card--cost">R$ {props.price}</p>
            </div>
        </>
    );
}