import {Box, Stack, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';


const Wrapper = styled(Stack)(({theme}) => ({
    height: '102px',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '40px 32px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        height: '100%',
        margin: '40px',
    }

}))

const ListItem = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        margin: '10px 0px',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    }
}))

const ImageContainer = styled(Box)(({bgColor}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "83px",
    height: "82px",
    borderRadius: "20px",
    background: bgColor
}))

const Title = styled(Typography)({
    color: '#000000',
    fontWeight: "500",
    fontSize: "20px",
})
const Desc = styled(Typography)({
    color: '#969696',
    fontWeight: "400",
    fontSize: "15px",
})


const FeatureList = [
    {
        title: "Web Application",
        desc: "Lorem Ipsum is simply",
        bgColor: "#EFEAFF",
        logo: '/images/website.png',
    },
    {
        title: "SEO",
        desc: "Lorem Ipsum is simply",
        bgColor: "#ECFFDA",
        logo: '/images/seo.png',
    },
    {
        title: "AR/VR Solutions",
        desc: "Lorem Ipsum is simply",
        bgColor: "#DAE6FF",
        logo: '/images/ar.png',

    },
    {
        title: "Mobile Applications",
        desc: "Lorem Ipsum is simply",
        bgColor: "#FFE5DA",
        logo: '/images/mobile.png',

    },


]


export default function Features() {


    return (<Wrapper>
            {FeatureList.map((feature) => <ListItem>
                    <ImageContainer bgColor={feature.bgColor}>
                        <img src={feature.logo} alt={"LOGO"}/>
                    </ImageContainer>
                    <Stack sx={{paddingLeft: '18px', alignItems: 'left'}}>
                        <Title>
                            {feature.title}
                        </Title>
                        <Desc>
                            {feature.desc}
                        </Desc>
                    </Stack>
                </ListItem>
            )}
        </Wrapper>
    )

}