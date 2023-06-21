import React from 'react'
import TopNav from "./component/TopNav";
import './App.css'
import {ThemeProvider, createTheme, Divider} from "@mui/material";
import Features from "./component/Features";
import MainHeader from "./component/MainHeader";
import CompanyCard from "./component/CompanyCard";
import UserEmail from "./component/UserEmail";
import BriefDescCard from "./component/BriefDescCard";
import Footer from "./component/Footer";


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
}});
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TopNav/>
            <Divider/>
            <MainHeader/>
            <Features/>
            <Divider/>
            <BriefDescCard/>
            <CompanyCard/>
            <UserEmail/>
            <Footer/>
        </ThemeProvider>
    )
}

export default App
