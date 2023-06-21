import {Button, Stack, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';


const Wrapper = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxHeight: "743px",
    width: '100vw',
    background: `rgba(16, 144, 203, 0.1) url('/images/bg_header_text.png') no-repeat center left  -100px  `,
    backgroundSize: '350px 350px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        maxHeight: "100%",
        padding: '20px',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        background: `rgba(16, 144, 203, 0.1) url('/images/bg_header_text.png') no-repeat top left -120px  `,

    }
}))

const LeftSection = styled(Stack)(({theme}) => ({
    width: '45%',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        alignItems: 'left',
    }

}))

const Heading = styled(Typography)({
    fontFamily: 'Poppins',
    fontWeight: "600",
    fontSize: "40px",
    lineHeight: "60px",

})
const Desc = styled(Typography)({
    fontWeight: "400",
    fontSize: "16px",
    color: "#5C5C5C",

})

const CustomButton = styled(Button)({
    fontSize: "16px",
    fontWeight: "400",
    width: '193px',
    lineHeight: "24px",
    textTransform: "unset",

})

const BtnGroup = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',

})

const CardImg = styled('img')(({theme})=>({
    background: `url('/images/bg_header_img.png') no-repeat top 50px right -20px `,
    maxWidth:'50%',
    height:'100%',
    alignSelf:'center',
    [theme.breakpoints.down('md')]:{
        maxWidth:'100%',
    }

}))


export default function MainHeader() {

    return (<Wrapper>
        <LeftSection spacing={4}>
            <Heading> Experienced <span style={{color: '#1090CB'}}>mobile and web</span> applications and website
                builders measuring.</Heading>
            <Desc> EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website
                builders measuring dozens of completed projects. We build and develop mobile applications for several
                top platforms, including Android & IOS. </Desc>

            <BtnGroup>
                <CustomButton style={{
                    background: "#1090CB",
                    color: '#FFFFFF',
                    marginRight: '16px'
                }}>Contact Us</CustomButton>

                <CustomButton variant="outlined" style={{
                    borderColor: "#1090CB"
                }}>View more</CustomButton>
            </BtnGroup>
        </LeftSection>

        <CardImg src={'/images/header.png'} alt={'main-header-image'}/>


    </Wrapper>)

}

