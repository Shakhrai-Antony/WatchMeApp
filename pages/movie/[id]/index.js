import axios from "axios";
import {server} from "../../../config";
import s from './movie.module.scss'
import Meta from "../../../components/meta/meta";

const Movie = ({movie}) => {
    return (
        <div className={s.movie_section}>
            <Meta title={movie.title}/>
            <div className={s.movie_poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                <h1>{movie.title}</h1>
            </div>
            <div className={s.movie_description}>
                Genres:
                <ul>
                    {movie.genres.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}


export async function getStaticProps(context) {
    const {id} = context.params;
    const res = await axios(`${server}/${id}?api_key=2c1cb3344e92f6cca2058cf6b07e931c&language=en-US&page=1`)
    const movie = res.data

    return {
        props: {movie}
    }
}

export async function getStaticPaths() {
    const res = await axios(`${server}/popular?api_key=2c1cb3344e92f6cca2058cf6b07e931c&language=en-US&page=1`)
    const movies = res.data.results

    const ids = movies.map(item => item.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

export default Movie