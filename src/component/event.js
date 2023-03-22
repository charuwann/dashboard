import { Typography, Grid, Divider, CardMedia } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "../style/event.css"
import EventImg from "../images/event.jpg";
import data from "../data.json";
import CardCustom from '../commonComponent/cardCustom';

const eventTopic = {
  fontWeight: 600,
  fontSize: "1.3rem",
  margin: "20px 0 0 0"
}

const eventContent = {
  fontWeight: 500,
  fontSize: "0.9rem",
  color: "#808B96",
  textAlign: "left",
  display: "flex",
  alignItems: "start",
  marginBottom: "5px"
}

const eventSell = {
  fontWeight: 500,
  fontSize: "0.9rem",
  color: "#808B96",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const eventSellDate = {
  fontWeight: 500,
  fontSize: "0.9rem",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const icon = {
  width: "0.7em",
  margin: "0 5px"
}

export default function Event() {
  return (
    <CardCustom content={
      <>
      <Grid style={{marginTop: "40px"}} container justifyContent="center">
        <CardMedia
          sx={{ height: 100, borderRadius: "10px", width: 120}}
          image={EventImg}
        />
      </Grid>
      <Typography className="text-event-name" variant="h5" sx={eventTopic}>
        {data.event.eventName}
      </Typography>
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid style={{padding: "0 10px"}}>
        <Typography variant="body2" sx={eventContent}>
          <CalendarMonthIcon sx={icon} fontSize="small"/>
          {data.event.eventdate}
        </Typography>
        <Typography variant="body2" sx={eventContent}>
          <LocationOnIcon sx={icon} fontSize="small"/>
          {data.event.location}
        </Typography>
      </Grid>
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid container className="event-footer" rowSpacing={2}>
        <Grid item >
          <Typography variant="subtitle2" sx={eventSell}>Selling Start</Typography>
          <Typography variant="BUTTON" sx={eventSellDate}>{data.event.sellingStart}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={eventSell}>Selling End</Typography>
          <Typography variant="BUTTON" sx={eventSellDate}>{data.event.sellingEnd}</Typography>
        </Grid>
      </Grid>
    </>
    }
    />
  );
}
