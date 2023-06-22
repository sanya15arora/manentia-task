import {Box, Divider, Link, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const Wrapper = styled(Stack)(({theme}) => ({

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '82px',
    marginBottom: '56px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',

    }
}))

const SubSec = styled(Stack)(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'left',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        margin: '20px',

    }
}))

const HeadingText = styled(Typography)({
    color: '#000000',
    fontWeight: "500",
    fontSize: "17px",
})

const ListText = styled(Typography)({
    color: '#515151',
    fontWeight: "400",
    fontSize: "16px",
})

const SocialMediaImg = styled(Stack)({
    width: "34px",
    height: "34px",
    borderRadius: '50%',
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16px',
    alignSelf: 'flex-end'
})

const socialMedia = [
    {
        title: 'fb',
        socialMediaImg: '/images/footer_img/fb.png',
        link: 'https://www.facebook.com/'
    },
    {
        title: 'insta',
        socialMediaImg: '/images/footer_img/instagram.png',
        link: 'https://www.instagram.com/'
    },
    {
        title: 'twitter',
        socialMediaImg: '/images/footer_img/twitter.png',
        link: 'https://twitter.com/'
    },
    {
        title: 'linkedIn',
        socialMediaImg: '/images/footer_img/linkedin.png',
        link: 'https://www.linkedin.com/'
    }
]


export default function Footer() {

    return <>
        <Wrapper>
            <SubSec spacing={4}>
                <img src={'/images/footer_img/footer_logo.png'} alt={'footer-logo'} width={'45px'} height={'24px'}/>
                <ListText maxWidth={'370px'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. </ListText>
                <ListText>@Lorem</ListText>
            </SubSec>
            <SubSec spacing={2}>
                <HeadingText>About us</HeadingText>
                <Stack spacing={1}>
                    <ListText>Lorem</ListText>
                    <ListText>Portfolio</ListText>

                    <ListText>Career</ListText>

                    <ListText>Contact us</ListText>

                </Stack>

            </SubSec>
            <SubSec spacing={4}>
                <HeadingText> Contact us</HeadingText>
                <ListText maxWidth={"282px"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. </ListText>

                <ListText>+908 89097 890</ListText>

            </SubSec>
            <SubSec sx={{alignSelf:'flex-end'}}>
                <Stack flexDirection={'row'} >
                    {socialMedia.map((data) =>
                        <Link href={data.link} target="_blank">
                            <SocialMediaImg>
                                <img src={data.socialMediaImg} alt={data.title}/>
                            </SocialMediaImg>
                        </Link>)}
                </Stack>
            </SubSec>

        </Wrapper>
        <Divider/>
        <ListText textAlign={'center'} fontSize={"13px"} fontWeight={'400'} color={'#686868'}
                  margin={'30px 0px'}> Copyright ® 2021 Lorem All rights Rcerved</ListText>
    </>


}