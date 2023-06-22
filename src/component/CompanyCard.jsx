import {Box, Stack, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';


const Wrapper = styled(Stack)(({theme}) => ({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 32px',
    background: `url('/images/bg_header_img.png') no-repeat  left -140px center`,
    backgroundSize: '250px 250px',
    [theme.breakpoints.down('md')]: {
        textAlign:'center',
        background: `url('/images/bg_header_img.png') no-repeat  left -140px top`,
        backgroundSize: '230px 230px',

    }

}))

const ListItem = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100vw',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignContent: 'flex-start',
        justifyContent: 'space-evenly',
    }
}))


const Title = styled(Typography)({
    color: '#000000',
    fontWeight: "500",
    fontSize: "24px",
    alignText:'center'
})

const LogoImg = styled('img')(({theme}) => ({

    [theme.breakpoints.down('md')]: {
        maxWidth: '150px',
        maxHeight: '135px'
    }
}))


const companyLogo = [
    '/images/company/beneoshop.png',
    '/images/company/caspio.png',
    '/images/company/HyperGrid.png',
    '/images/company/leotrippi.png'

]


export default function CompanyCard() {


    return (<Wrapper>
            <Title> You will be in good Company</Title>
            <ListItem>

                {companyLogo.map((logo) =>
                    <LogoImg src={logo} alt={"LOGO"}/>
                )}
            </ListItem>

        </Wrapper>
    )

}