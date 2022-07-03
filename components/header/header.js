import Link from "next/link";
import s from './header.module.scss'

const Header = () => {
    return (
        <nav className={s.header}>
            <Link href='/'>
                <a>
                    Watch<span>Me</span>
                </a>
            </Link>
        </nav>
    )
}

export default Header