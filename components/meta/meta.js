import Head from "next/head";

const Meta = ({keywords, description, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
                <meta charSet='utf-8'/>
            </Head>

        </>
    )
}

export default Meta