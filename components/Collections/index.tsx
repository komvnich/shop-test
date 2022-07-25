import React from "react";

interface IOptionData {
    title: string;
    value: string;
}

interface Props{
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionData:IOptionData[]= [
    {
        title: "Диски",
        value: "Диски"
    },
    {
        title: "Шины",
        value: "Шины"
    }
]

export const Collections:React.FC<Props> = ({
    onChange
}) => {
    return(
        <select onChange={onChange}>
            {OptionData.map((elements) => (
                <>
                    <option value={elements.value}>{elements.title}</option>
                </>
            ))}
        </select>
    )
}