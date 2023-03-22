import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Grid, Divider } from '@mui/material';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';

import data from "../data.json";
import CurrencyFormat from "../util/currency";
import CardCustom from '../commonComponent/cardCustom';

const eventTopic = {
  color: "#808B96",
  fontWeight: 500,
  fontSize: "1.1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const saleTotal = {
  fontWeight: "bolder",
  fontSize: "1.8em",
  lineHeight: 2
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

export default function TotalCheckIn() {
  const mobile = useMediaQuery(`(max-width: 300px)`);
  const checkDivider = useMediaQuery(`(max-width: 630px)`);
  return (
    <CardCustom
      content={
        <Grid container direction="column"  justifyContent="center" alignItems="center">
          {mobile && <WhereToVoteIcon sx={icon}/>}
          <Typography sx={eventTopic}>
            {!mobile && <WhereToVoteIcon sx={icon}/>}
            Total Check-in
          </Typography>
          <Typography sx={saleTotal}>
          {CurrencyFormat(data.ticket.checkIn)} {!checkDivider ? '/' : <Divider />} {CurrencyFormat(data.ticket.totalCheckIn)}
          </Typography>
        </Grid> 
      }
    />
  );
}
