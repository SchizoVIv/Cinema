import './FilmsList.css';
import {initialMovies} from '../../../utils/constants'
import FilmCard from './FilmCard/FilmCard'

export default function FilmsList(props) {
    return(
        <section className='film-list'>
            <ul className='section-cards'>
                {
                    initialMovies.map((film, index) => {
                        return(
                            <FilmCard
                                chengeActiveCard={props.chengeActiveCard}
                                film={film}
                                name={film.nameRU}
                                image={film.image}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

