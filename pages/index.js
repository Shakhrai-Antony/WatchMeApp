import Hero from "../components/hero/hero";
import {server} from "../config";
import axios from "axios";
import s from './home.module.scss'
import Link from "next/link";

export default function Home({movies}) {
    return (
        <div>
            <Hero/>
            <div className={s.movies_section}>
                {movies.map((item) => {
                    return (
                        <div className={s.movies_section_content} key={item.id}>
                            <Link href={`/movie/${item.id}`}>
                                <a>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                                </a>
                            </Link>
                            <h1>{item.title}</h1>
                            <p> Release date: {item.release_date}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await axios(`${server}/popular?api_key=2c1cb3344e92f6cca2058cf6b07e931c&language=en-US&page=1`)
    const movies = res.data.results

    return {
        props: {movies}
    }
}