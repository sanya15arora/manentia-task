import {useState} from 'react';
import {Button, Stack} from "@mui/material";
import {styled} from '@mui/material/styles';


const Wrapper = styled(Stack)(({theme}) => ({
    borderBottom: '1px #C4C4C4',
    height: '80px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 32px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: "0px",
        paddingBottom: '4px',
        height: '120px',
    }

}))

const NavList = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 0.2,
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-around',

    }
}))

const NavButton = styled(Button)({
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    textTransform: "unset",

})


export default function TopNav() {

    const [selectedBtn, setSelectedBtn] = useState('home')

    return (
        <Wrapper>
            <img src={'/images/LOGO.png'} alt={"LOGO"} style={{width: '100px', height: '40px'}}/>
            <NavList>
                <NavButton style={{color: selectedBtn === 'home' ? '#1090CB' : '#000000'}}
                           onClick={() => setSelectedBtn('home')}>Home</NavButton>
                <NavButton style={{color: selectedBtn === 'about' ? '#1090CB' : '#000000'}}
                           onClick={() => setSelectedBtn('about')}>About Us</NavButton>
                <NavButton style={{color: selectedBtn === 'services' ? '#1090CB' : '#000000'}}
                           onClick={() => setSelectedBtn('services')}>Services</NavButton>
                <NavButton style={{color: selectedBtn === 'blog' ? '#1090CB' : '#000000'}}
                           onClick={() => setSelectedBtn('blog')}>Blog</NavButton>
                <NavButton style={{
                    background: "#1090CB", color: '#FFFFFF', maxHeight: '50px'
                }}>Contact Us</NavButton>

            </NavList>
        </Wrapper>
    )

}