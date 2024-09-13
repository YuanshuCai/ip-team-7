import headerImg from '../../assets/images/header.png'
import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <img src={headerImg} alt="image of header with navigation and title is Optik TV Package" className='header__img' />
        </header>
    )
}

export default Header
