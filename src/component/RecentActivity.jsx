import {styled} from "@mui/material/styles";
import {Stack, Typography} from "@mui/material";
import ActivityStepCard from "./ActivityStepCard";


const Wrapper = styled(Stack)(({theme}) => ({
    flexDirection: 'column',
    alignItems: 'center',
    margin: '115px 0px',
    background: `url('/images/bg_activity_purple.png') no-repeat top 100px right -40px`,
    [theme.breakpoints.down('md')]: {
        background: 'none'

    }
}))

const Title = styled(Typography)(({theme}) => ({
    color: '#000000',
    fontWeight: "600",
    fontSize: "33px",
    width: '60%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        width: '90%',

    }
}))

const Desc = styled(Typography)(({theme}) => ({
    color: '#545454',
    fontWeight: "400",
    fontSize: "18px",
    width: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        width: '80%',

    }

}))


const activityData = [
    {
        happyBgColor: '#08D3BB',
        title: 'Lorem Ipsum is simply dummy text',
        subTitle: 'Lorem Ipsum is simply dummy text',
        desc: 'Lorem Ipsum is simply dummy text of the printing. ',
        subDesc: 'EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ',
        activityImg: '/images/activities/activity1.png'
    },
    {
        happyBgColor: '#1090CB',
        title: 'Lorem Ipsum is simply dummy text',
        subTitle: 'Lorem Ipsum is simply dummy text',
        desc: 'Lorem Ipsum is simply dummy text of the printing.',
        subDesc: 'EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ',
        activityImg: '/images/activities/activity2.png'
    },
    {
        happyBgColor: '#9208D3',
        title: 'Lorem Ipsum is simply dummy text',
        subTitle: 'Lorem Ipsum is simply dummy text',
        desc: 'Lorem Ipsum is simply dummy text of the printing. ',
        subDesc: 'EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. ',
        activityImg: '/images/activities/activity3.png'
    }
]
export default function RecentActivity() {


    return (
        <Wrapper spacing={4}>
            <Title>Lorem Ipsum is simply dummy text of the printing. </Title>
            <Desc> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's</Desc>
            {activityData.map((activity, index) => <ActivityStepCard activityData={activity} index={index}/>
            )}


        </Wrapper>

    )
}