import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer";
import "./Layout.css";

const Layout = (props) => {
    return (<div className="layout"> <MainNavigation /> <main> {
        props.children
    }

    </main> <Footer /> </div>)
}

export default Layout;