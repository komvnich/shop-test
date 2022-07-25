import { ICardsData } from "./CardsContainer"
import style from '../../styles/Cards.module.css';
import { ButtonBuy } from "../UI/Buttons";


export const Card:React.FC<ICardsData> = ({
    image,
    title,
    description,
    onClick
}) => {
    return(
        <div className={style.card}>
            <div>{image}</div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonBuy onClick={onClick}>Buy</ButtonBuy>
        </div>
    )
}