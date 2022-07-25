import style from '../../styles/Container.module.css';

interface Props{
    children: React.ReactNode
}

export const Container:React.FC<Props> = ({
    children
}) => {
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}