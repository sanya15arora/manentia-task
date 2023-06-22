import React from 'react'
import TopNav from "./component/TopNav";
import './App.css'
import {ThemeProvider, createTheme, Divider} from "@mui/material";
import Features from "./component/Features";
import MainHeader from "./component/MainHeader";
import CompanyListing from "./component/CompanyListing";
import Subscribe from "./component/Subscribe";
import BriefDescCard from "./component/BriefDescCard";
import Footer from "./component/Footer";
import RecentActivity from "./component/RecentActivity";


const theme = createTheme({
    breakpoints: {
        keys: [
            "xxs",
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
        ],
        values: {
            xs: 414, // iPhone X and below in portrait mode
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    }
});
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TopNav/>
            <Divider/>
            <MainHeader/>
            <Features/>
            <Divider/>
            <RecentActivity/>
            <BriefDescCard/>
            <CompanyListing/>
            <Subscribe/>
            <Footer/>
        </ThemeProvider>
    )
}

export default App
