import {styled} from "@mui/material/styles";
import {Button, Stack, TextField, Typography} from "@mui/material";


const Wrapper = styled(Stack)(({theme}) => ({
    backgroundColor: '#E8F4FA',
    height: "534px",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

}))

const StarImg = styled('img')(({theme}) => ({
    position: 'relative',
    top: "50px",
    left: '160px',
    [theme.breakpoints.down('md')]: {
        left: '80px'
    }
}))

const CustomContainer = styled(Stack)(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: '60%',
    padding: '50px 0px',
    background: `url('/images/bg_pie.png') no-repeat top  right`,
    [theme.breakpoints.down('md')]: {
        maxWidth: '80%'

    }

}))

const Heading = styled(Typography)({
    color: '#000000',
    fontWeight: "600",
    maxWidth: '516px',
    textAlign: 'center',
    fontSize: "30px",
})

const EmailTextField = styled(TextField)(({theme}) => ({
    flexGrow: '1',
    marginRight: '16px',
    backgroundColor: '#fff',
    '.MuiInputBase-root': {
        fontFamily: 'Poppins',
        height: '67px',
        width: '532px'
    },
    [theme.breakpoints.down('md')]: {
        '.MuiInputBase-root': {
            fontFamily: 'Poppins',
            height: '67px',
            width: '50vw'
        }

    }

}))


const Btn = styled(Button)(({theme}) => ({
    background: '#000000',
    height: '67px',
    width: '173px',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
        height: '67px',
        width: '35vw',
        maxWidth: '173px',


    }

}))

const BtnText = styled(Typography)({
    color: '#fff',
    fontWeight: "500",
    fontSize: "16px",
})


export default function Subscribe() {


    return (
        <>
            <StarImg src={'/images/star.png'} alt={'star-img'}/>
            <Wrapper>
                <CustomContainer spacing={4}>
                    <Heading> Lorem Ipsum is simply dummy text of the printing. </Heading>
                    <Stack flexDirection={'row'} alignItems={'center'}>
                        <EmailTextField placeholder={'Enter your email'}></EmailTextField>
                        <Btn>
                            <BtnText> SUBSCRIBE </BtnText>
                        </Btn>

                    </Stack>
                </CustomContainer>
            </Wrapper>
        </>

    )
}