import './Hero.css'

export default function Hero(props) {

    return(
        <section className='hero'>
            <div className='conteiner-main'>
                <table class="hero__table">
                    <tbody>
                        <tr>
                            <td className='hero__table-text'>{props.activeCard.rating}</td>
                            <td className='hero__table-text'>{props.activeCard.autor}</td>
                            <td className='hero__table-text'>{props.activeCard.genre}</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className='hero__title'>{props.activeCard.nameRU}</h1>
                <p className='hero__text'>{props.activeCard.text}</p>
                <button
                    className='hero__button'
                    onClick={props.handlePopupOpen}
                >Купить биллет</button>
            </div>
        </section>
    )
}
