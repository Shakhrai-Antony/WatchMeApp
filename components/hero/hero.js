import s from './hero.module.scss'
import Link from "next/link";

const Hero = () => {
    return (
        <div className={s.hero}>
            <img src={'/home_cinema.png'}/>
            <h1>WELCOME TO WATCH ME</h1>
            <p>Produced FILM feature, TELEVISION and GAME.</p>
            <Link href='/contact'>
                <a>
                    <button>CONTACT US</button>
                </a>
            </Link>
        </div>
    )
}


export default Hero