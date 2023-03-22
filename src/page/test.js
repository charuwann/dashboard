import { Card, Typography, Grid, Divider, CardMedia } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// ----------------------------------------------------------------------
import EventImg from "../images/event.jpg";
import data from "../data.json";


const eventTopic = {
  fontWeight: 600,
  fontSize: "1.3rem",
  margin: "20px 0 0 0"
}

const eventContent = {
  fontWeight: 600,
  fontSize: "0.7rem",
  color: "#ABB2B9",
  textAlign: "left",
  display: "flex",
  alignItems: "center"
}

const eventSell = {
  fontWeight: 500,
  fontSize: "0.8rem",
  color: "#ABB2B9",
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
  width: "0.7em"
}

function Test() {
  return (
    <>
      <Card sx={{height: "100%", padding: "20px", borderRadius: "10px"}}>
        <Grid container justifyContent="center">
          aaaa
        </Grid>
      </Card>
    </>
  );
}

export default Test;