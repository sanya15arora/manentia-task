import {Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";


const Wrapper = styled(Stack)(({theme}) => ({
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    }
}))

const DetailSection = styled(Stack)(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'left',
    marginLeft: '120px',
    marginRight: '40px',
    maxWidth: '35%',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
        margin: '40px',
        maxWidth: '100%',

    }
}))

const TitleSection = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center'
})

const HappyIcon = styled(Stack)(({bgColor}) => ({

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    height: '58px',
    width: '58px',
    marginRight: '25px',
    backgroundColor: bgColor


}))

const Desc = styled(Typography)({
    color: '#000000',
    fontWeight: "600",
    fontSize: "30px",
})

const SubDesc = styled(Typography)({
    color: '#545454',
    fontWeight: "400",
    fontSize: "16px",
})

const Img = styled('img')(({theme, purpleBg}) => ({
    maxHeight: '480px',
    maxWidth: '40%',
    alignSelf: 'center',
    zIndex: "-1",
    background: purpleBg ? `url('/images/bg_activity_purple.png') no-repeat right` : `url('/images/bg_yellow_img.png') no-repeat  center left -40px`,
    [theme.breakpoints.down('md')]: {
        maxHeight: '400px',
        maxWidth: '90vw',

    }
}))

export default function ActivityStepCard({activityData, index}) {


    const getNewDesc = (desc, highlighted_text) => {
        return desc?.replace(highlighted_text,
            `<span style="color: #1090CB;font-family: inherit;">${highlighted_text}</span>`)
    }

    return (
        <Wrapper sx={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
            <DetailSection spacing={2}>
                <TitleSection>
                    <HappyIcon bgColor={activityData?.happyBgColor}>
                        <img src={'/images/happy.png'} alt={'happy-img'}/>
                    </HappyIcon>
                    <Stack>
                        <Desc sx={{fontSize: '17px', fontWeight: '500'}}>
                            {activityData?.title}</Desc>
                        <SubDesc sx={{fontSize: '14px', fontWeight: '400'}}>
                            {activityData?.subTitle}</SubDesc>
                    </Stack>
                </TitleSection>
                <Desc dangerouslySetInnerHTML={{__html: getNewDesc(activityData.desc, activityData.highlighted_text)}}/>
                <SubDesc>
                    {activityData?.subDesc}
                </SubDesc>
            </DetailSection>
            <Img src={activityData?.activityImg} alt={'activity-img'} purpleBg={(index % 2 === 0)}/>
        </Wrapper>

    )
}