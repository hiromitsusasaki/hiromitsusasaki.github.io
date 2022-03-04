import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './navbar'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }: any) {
    return (
        <>
            <ChakraProvider>
                <Header />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </ChakraProvider>
        </>
    )
}
