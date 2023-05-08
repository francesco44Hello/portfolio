import React from 'react'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import TestComponent from '../components/test/test'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HamburgerMenu from '../components/burger/burger'
const page = () => {
    return (
        <>
        <HamburgerMenu/>
         <TestComponent />
         <Footer />
        </>
     
    )
}

export default page