import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Divider, Grid, Stack } from '@mui/material';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';

import "../style/ticketChart.css";
import data from "../data.json";
import CardCustom from '../commonComponent/cardCustom';
import CircleProgressCustom from "../commonComponent/circleProgress";
import LinearProgressCustom from "../commonComponent/LinearProgressCustom";
import Loading from "../commonComponent/loading";

const eventTopic = {
  fontWeight: "bolder",
  fontSize: "1.5vw",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "20px 0"
}

const icon = {
  color: "#E74C3C",
  background: "#F9EBEA",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  padding: "5px",
  marginRight: "5px"
}

const totalPercentStyle = {
  fontWeight: 900,
  fontSize: "2.5rem",
  marginTop: "-115px"
}

const totalSubtStyle = {
  fontWeight: 500,
  fontSize: "1rem",
  color: "gray",
  marginTop: "-10px"
}

function AdmissionChart() {
  const [totalPercent, setTotalPercent] = useState(0);
  const [ticketData, setTicketData] = useState(data.admission);
  const isMobile = useMediaQuery('(max-width:300px)');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalPercent(Math.round((data.admission.sold/data.admission.total)*100))
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <CardCustom content={
        <>
        {isMobile && <WhereToVoteIcon sx={icon}/>}
        <div className="ticket-chart-topic">
          <Typography sx={eventTopic}>
            {!isMobile && <WhereToVoteIcon sx={icon}/>}
            Admission Check-in / Sold
          </Typography>
        </div>
        <Divider />
        <Grid style={{padding: "20px 5px"}} container spacing={3} justifyContent="space-around">
          <Grid style={{padding: "10px"}} className="center" item lg={12} xl={4}>
            <div style={{ width: 150, height: 150}}>
              <CircleProgressCustom 
                percentage={totalPercent} 
                colorStart="#D2B4DE" 
                colorStop="#AF7AC5"
                idCSS="admission"
              />
              <Typography sx={totalPercentStyle}>{totalPercent}%</Typography>
              {
                totalPercent ? 
                <Typography sx={totalSubtStyle}>{ticketData?.sold}/{ticketData?.total}</Typography>
                : <Loading height="8px" width="30%" margin="5px 0 0 50px"/>
              }
            </div>
          </Grid>
          <Grid item lg={12} xl={8}>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgressCustom
                color={"##CE4AF1"}
                valuePercent={(ticketData?.generalAdmission/ticketData?.generalAdmissionTotal)*100}
                item={ticketData?.generalAdmission}
                itemTotal={ticketData?.generalAdmissionTotal}
                topic={"General Admission"}
              />
              <LinearProgressCustom
                color={"#AAA0CE"}
                valuePercent={(ticketData?.vip/ticketData?.vipTotal)*100}
                item={ticketData?.vip}
                itemTotal={ticketData?.vipTotal}
                topic={"VIP"}
              />
              <LinearProgressCustom
                color={"#9AF1FD"}
                valuePercent={(ticketData?.vvip/ticketData?.vvipTotal)*100}
                item={ticketData?.vvip}
                itemTotal={ticketData?.vvipTotal}
                topic={"VVIP"}
              />
              <LinearProgressCustom
                color={"#C190C4"}
                valuePercent={(ticketData?.vvip2/ticketData?.vvip2Total)*100}
                item={ticketData?.vvip2}
                itemTotal={ticketData?.vvip2Total}
                topic={"VVIP2"}
              />
              <LinearProgressCustom
                color={"#E9CAEB"}
                valuePercent={(ticketData?.vvip3/ticketData?.vvip3Total)*100}
                item={ticketData?.vvip3}
                itemTotal={ticketData?.vvip3Total}
                topic={"VVIP3"}
              />
            </Stack>
          </Grid>
        </Grid>
        </>
      }/>
    </>
  );
}

export default AdmissionChart;
