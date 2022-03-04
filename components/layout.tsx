import Navbar from './navbar'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
