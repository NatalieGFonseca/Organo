import banner from '../../imagens/banner.png'
import './Banner.css'

function Banner(){
    //JSX --- Utilizado para o react entender as tags
    return(
        <header className='banner'>
            <img src={banner} alt="Banner" ></img>
        </header>
    )
}

export default Banner;