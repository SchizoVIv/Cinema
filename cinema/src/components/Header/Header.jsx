import './Header.css';
import LOGO_IMG from '../../images/logo.svg'
// import CART_IMG from '../../images/cartIcon.svg'

export default function Header() {
    return(
        <header className='header'>
            <div className='conteiner'>
                <img 
                    className='header__logo' 
                    src={LOGO_IMG} 
                    alt="Film!" 
                />
                <button className='header__button-cart'></button>
            </div>
        </header>
    )
}
