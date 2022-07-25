import { Card } from "./Card";
import style from '../../styles/Cards.module.css';
import { useState } from "react";

export interface ICardsData{
    image: string;
    title: string;
    description: string;
    onClick?: () => void;
}

interface Props{
    searchFilter: string;
    onClick?: () => void;
}

const cardsData:ICardsData[] = [
    {
        image: "url",
        title: "Диски",
        description: "Wheel..."
    },    
    {
        image: "url",
        title: "Диски",
        description: "Wheel..."
    },
    {
        image: "url",
        title: "Диски",
        description: "Wheel..."
    },
    {
        image: "url",
        title: "Диски",
        description: "Wheel..."
    },
    {
        image: "url",
        title: "Шины",
        description: "Wheel..."
    },
];


export const CardsContainer:React.FC<Props> = ({
    searchFilter,
    onClick
}) => {

    return(
        <section className={style.cardsContainer}>
            {cardsData.filter((elements) => {
                if(searchFilter === ""){
                    return elements;
                }else if(elements.title.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())){
                    return elements;
                }
            }).map((elements, index) => (
                <>
                    <Card
                        image={elements.image}
                        title={elements.title}
                        description={elements.description}
                        onClick={onClick}
                    />
                </>
            ))}
        </section>
    )
}