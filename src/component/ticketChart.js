import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Divider, Grid, Stack } from '@mui/material';
import CardCustom from '../commonComponent/cardCustom';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

import "../style/ticketChart.css";
import data from "../data.json";
import CircleProgressCustom from "../commonComponent/circleProgress";
import LinearProgressCustom from "../commonComponent/LinearProgressCustom";

const eventTopic = {
  fontWeight: "bolder",
  fontSize: "1.5vw",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "20px 0"
}

const icon = {
  color: "#9B59B6",
  background: "#D7BDE2",
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

function TicketChart() {
  const isMobile = useMediaQuery('(max-width:300px)');
  const ticketData = data.ticketData;
  const totalPercent = Math.round((ticketData.sold/ticketData.total)*100)
  return (
    <>
      <CardCustom content={
        <>
        {isMobile && <ConfirmationNumberIcon sx={icon}/>}
        <div className="ticket-chart-topic">
          <Typography sx={eventTopic}>
            {!isMobile && <ConfirmationNumberIcon sx={icon}/>}
            Ticket Sold / Total Available
          </Typography>
        </div>
        <Divider />
        <Grid style={{padding: "20px 10px"}} container spacing={3} justifyContent="space-around">
          <Grid className="center" style={{padding: "10px"}} item lg={12} xl={4} alignItems="center">
            <div style={{ width: 150, height: 150}}>
              <CircleProgressCustom 
                percentage={totalPercent} 
                colorStart="#85C1E9" colorStop="#2E86C1"
                idCSS="ticketChart"
              />
              <Typography sx={totalPercentStyle}>{totalPercent}%</Typography>
              <Typography sx={totalSubtStyle}>{ticketData.sold}/{ticketData.total}</Typography>
            </div>
          </Grid>
          <Grid item lg={12} xl={8}>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgressCustom
                color={"#0C339B"}
                valuePercent={(ticketData.generalAdmission/ticketData.generalAdmissionTotal)*100}
                item={ticketData.generalAdmission}
                itemTotal={ticketData.generalAdmissionTotal}
                topic={"General Admission"}
              />
              <LinearProgressCustom
                color={"#09A2C7"}
                valuePercent={(ticketData.vip/ticketData.vipTotal)*100}
                item={ticketData.vip}
                itemTotal={ticketData.vipTotal}
                topic={"VIP"}
              />
              <LinearProgressCustom
                color={"#49D2EE"}
                valuePercent={(ticketData.vvip/ticketData.vvipTotal)*100}
                item={ticketData.vvip}
                itemTotal={ticketData.vvipTotal}
                topic={"VVIP"}
              />
              <LinearProgressCustom
                color={"#6FBACC"}
                valuePercent={(ticketData.vvip2/ticketData.vvip2Total)*100}
                item={ticketData.vvip2}
                itemTotal={ticketData.vvip2Total}
                topic={"VVIP2"}
              />
              <LinearProgressCustom
                color={"#9469BF"}
                valuePercent={(ticketData.vvip3/ticketData.vvip3Total)*100}
                item={ticketData.vvip3}
                itemTotal={ticketData.vvip3Total}
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

export default TicketChart;
