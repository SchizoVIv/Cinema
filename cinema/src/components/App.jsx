import './App.css';
import Header from './Header/Header'
import Hero from './Main/Hero/Hero'
import FilmsList from './Main/FilmsList/FilmsList'
import { useState } from 'react';

export default function App() {
    const [activeCard, setActiveCard] = useState({nameRU: 'Стражи Гримуара', text:'Захватывающее фэнтезийное приключение режиссера Лайлы» рассказывает о группе героев, которые должны защитить древний магический том от попадания в руки тёмного колдуна. История об истинном значении дружбы, мужества и силы знаний.'})
    

    function chengeActiveCard(card) {
        setActiveCard(card)
        console.log(card)
    }

    return(
        <>
            <Header />
            <main>
                <Hero
                    activeCard={activeCard}
                />
                <FilmsList
                    chengeActiveCard={chengeActiveCard}
                />
            </main>
        </>
    )
}
