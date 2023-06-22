import {styled} from "@mui/material/styles";
import {Button, Stack, Typography} from "@mui/material";

const Wrapper = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '70px',
    background: `url('/images/bg_pink_img.png') no-repeat bottom right`,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
    }
}))


const DescCard = styled(Stack)(({theme, bgColor}) => ({
    maxWidth: "580px",
    minHeight: "459px",
    borderRadius: "20px",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '0 25px',
    background: bgColor ? bgColor : "#F4F4F4",
    [theme.breakpoints.down('md')]: {
        margin: '0px',
        maxWidth: "460px",
    }

}))

const Title = styled(Typography)(({theme, textColor}) => ({
    color: textColor,
    fontWeight: "600",
    fontSize: "25px",
    width: '70%',
    textAlign: 'center'
}))

const Desc = styled(Typography)(({theme, textColor}) => ({
    color: textColor,
    fontWeight: "400",
    fontSize: "16px",
    width: '75%',
    textAlign: 'center',

}))

const Btn = styled(Button)({
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    width: '153px',
    borderRadius: "10px",
    height: '50px',
    maxHeight: '50px'
})


const BellImg = styled('img')(({theme}) => ({
    position: 'relative',
    top: "62px",
    right: '-10px',
    height: '120px',
    width: '120px',
    alignSelf: 'flex-end'

}))


const briefList = [
    {
        title: 'Lorem Ipsum is simply dummy text.',
        desc: 'EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web applications and website buildersmeasuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.',
        btnText: 'View More',
        showBell: false
    },
    {
        title: 'Lorem Ipsum is simply dummy text.',
        desc: 'EXAMPLE COMPANY PVT LTD is a team of experienced mobile and web applications and website buildersmeasuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.',
        btnText: 'View More',
        showBell: true
    }
]


export default function BriefDescCard() {


    return (
        <Wrapper>
            {briefList.map((briefData) => <Stack flexDirection={'column'}>
                    <BellImg src={'images/bell.png'} alt={'bell-image'}
                             style={{visibility: briefData.showBell ? 'visible' : 'hidden'}}/>
                    <DescCard bgColor={briefData.showBell ? '#1090CB' : '#F4F4F4'}>
                        <Title textColor={briefData.showBell ? '#ffff' : '#000000'}>
                            {briefData.showBell}
                            {briefData.title}
                        </Title>
                        <Desc textColor={briefData.showBell ? '#ffff' : '#545454'}>
                            {briefData.desc}
                        </Desc>
                        <Btn style={{
                            background: briefData.showBell ? '#fff' : "#1090CB",
                            color: briefData.showBell ? '#1090CB' : '#FFFFFF'
                        }}>  {briefData.btnText}</Btn>
                    </DescCard>
                </Stack>
            )}
        </Wrapper>
    )
}