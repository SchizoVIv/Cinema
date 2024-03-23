import './App.css';
import Header from './Header/Header'
import Hero from './Main/Hero/Hero'
import FilmsList from './Main/FilmsList/FilmsList'
import Popup from './Main/Popup/Popup'
import { useEffect, useState } from 'react';

export default function App() {
    const [activeCard, setActiveCard] = useState({})

    const [isClose, setClose] = useState(false)

    function chengeActiveCard(card) {
        setActiveCard(card)
        console.log(card)
    }

    function handlePopupOpen() {
        setClose(true)
    }

    return(
        <>
            <Header />
            <main>
                <Hero
                    activeCard={activeCard}
                    handlePopupOpen={handlePopupOpen}
                />
                <FilmsList
                    chengeActiveCard={chengeActiveCard}
                />
                <Popup
                    isClose={isClose}
                    setClose={setClose}
                    activeCard={activeCard}
                />
            </main>
        </>
    )
}
