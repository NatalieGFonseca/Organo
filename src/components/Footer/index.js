import './Footer.css'
import fb from '../../imagens/fb.png'
import ig from '../../imagens/ig.png'
import tw from '../../imagens/tw.png'
import logo from '../../imagens/logo.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
            <div className='social_media'>
                <img src={fb} alt="Facebook" ></img>
                <img src={tw} alt="Twitter" ></img>
                <img src={ig} alt="Instagram" ></img>
            </div>
            <div className='logo'>
                <img src={logo} alt="Logo" ></img>
            </div>
            <div className='description'>
                <h4>Desenvolvido por Natalie</h4>
            </div>
            </section>
        </footer>
    )
}

export default Footer