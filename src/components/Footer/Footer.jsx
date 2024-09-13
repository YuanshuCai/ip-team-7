import footerImg from '../../assets/images/footer.png'
import './Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <img src={footerImg} alt="image of Telus Footer" className='footer__img' />
        </footer>
    )
}

export default Footer
