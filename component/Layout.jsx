import Navbar from "./Nav"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout