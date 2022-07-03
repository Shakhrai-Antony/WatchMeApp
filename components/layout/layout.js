import Header from "../header/header";
import Meta from "../meta/meta";
import Footer from "../Footer/footer";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                <Meta title={'Home Page'}/>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout