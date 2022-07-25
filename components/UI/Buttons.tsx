interface Props{
    width?: number;
    height?: number;
    children: React.ReactNode;
    onClick?: () => void;
}

export const ButtonBuy:React.FC<Props> = ({
    onClick,
    width=150,
    height=60,
    children,
}) => {
    return(
        <button onClick={onClick} style={{width: `${width}px`, height: `${height}px`}}>{children}</button>
    )
}