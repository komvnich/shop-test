import React from 'react'
import styles from '../../styles/Home.module.css'
import { Collections } from '../Collections'

interface Props{
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setSearchSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    counter?: number;
}

export const Header:React.FC<Props> = ({
    setSearch,
    setSearchSelect,
    counter
}) => {

    return(
        <header className={styles.header}>
            <a href="#">NONAME SHOP</a>
            <Collections onChange={setSearchSelect}/>
            <input onChange={setSearch} type="search" placeholder='search'/>
            <button className={styles.cart}>
                CART
                <span>{counter}</span>
            </button>
        </header>
    )
}