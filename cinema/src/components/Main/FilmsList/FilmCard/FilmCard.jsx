import './FilmCard.css';

export default function FilmCard(props) {

    const handleClick = () => {
        props.chengeActiveCard(props.film)
        
    }
    return(
        <li className='card' onClick={handleClick}>
            <img className='card__image' src={props.image} alt="" />
            <h2 className='card__title'>{props.name}</h2>
        </li>
    )
}