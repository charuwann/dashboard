import { useEffect, useState } from 'react';
import { Typography, Grid, Divider, CardMedia } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "../style/event.css"
import EventImg from "../images/event.jpg";
import dataJson from "../data.json";
import CardCustom from '../commonComponent/cardCustom';
import Loading from "../commonComponent/loading";

const eventTopic = {
  fontWeight: 600,
  fontSize: "1.3rem",
  margin: "20px 0 0 0",
  color: "#9B59B6",
  textAlign: "center"
}

const eventContent = {
  fontWeight: 500,
  fontSize: "0.9rem",
  color: "#A6ACAF",
  textAlign: "left",
  display: "flex",
  alignItems: "start",
  marginBottom: "5px"
}

const eventSell = {
  fontWeight: 500,
  fontSize: "0.9rem",
  color: "#A6ACAF",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const eventSellDate = {
  fontWeight: 500,
  fontSize: "1rem",
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
  const [data, setData] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setData(() => dataJson);
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <CardCustom content={
      <>
      <Grid style={{marginTop: "20px"}} container justifyContent="center">
        {
          data ?
          <CardMedia
            sx={{ height: 120, borderRadius: "10px", width: 120}}
            image={EventImg}
          />
          : <Loading height="120px" width="100px"/>
        }
      </Grid>
      <Typography className="center" variant="h5" sx={eventTopic}>
        {data?.event?.eventName || <Loading height="15px" width="50%" marginTop="15px"/>}
      </Typography>
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid style={{padding: "0 10px"}}>
        <Typography variant="body2" sx={eventContent}>
          <CalendarMonthIcon sx={icon} fontSize="small"/>
          {data?.event?.eventdate || <Loading margin="5px 0 0 0 "/>}
        </Typography>
        <Typography variant="body2" sx={eventContent}>
          <LocationOnIcon sx={icon} fontSize="small"/>
          {data?.event?.location || <Loading margin="5px 0 0 0 "/>}
        </Typography>
      </Grid>
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid container className="event-footer" rowSpacing={2}>
        <Grid item >
          <Typography variant="subtitle2" sx={eventSell}>Selling Start</Typography>
          <Typography variant="BUTTON" sx={eventSellDate}>{data?.event?.sellingStart || <Loading marginTop="10px"/>}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={eventSell}>Selling End</Typography>
          <Typography variant="BUTTON" sx={eventSellDate}>{data?.event?.sellingEnd || <Loading marginTop="10px"/>}</Typography>
        </Grid>
      </Grid>
    </>
    }
    />
  );
}
