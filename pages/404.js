import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import s from './404.module.scss'

const Error = () => {
    const router = useRouter()
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={s.error_section}>
            <h1 className={s.error_number}>404 Error</h1>
            <h1 className={s.error_description}>Page wasn't found</h1>
            <Link href='/'>
                <a>
                    <button>Go back to Home Page</button>
                </a>
            </Link>
        </div>
    )
}

export default Error