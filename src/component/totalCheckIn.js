import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography, Grid } from "@mui/material";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

import data from "../data.json";
import CurrencyFormat from "../util/currency";
import CardCustom from "../commonComponent/cardCustom";

const eventTopic = {
  color: "#A6ACAF",
  fontWeight: 500,
  fontSize: "1.1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const saleTotal = {
  fontWeight: "bolder",
  fontSize: "1.8em",
  lineHeight: 2,
  fontFamily: "Kanit-Bold"
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
  const isMobile = useMediaQuery(`(max-width: 300px)`);
  const checkDivider = useMediaQuery(`(max-width: 630px)`);
  return (
    <CardCustom
      content={
        <Grid container direction="column"  justifyContent="center" alignItems="center">
          {isMobile && <WhereToVoteIcon sx={icon}/>}
          <Typography sx={eventTopic}>
            {!isMobile && <WhereToVoteIcon sx={icon}/>}
            Total Check-in
          </Typography>
          <Typography sx={saleTotal}>
          {CurrencyFormat(data.ticket.checkIn)} {!checkDivider ? "/" : <span><br/>/</span>} {CurrencyFormat(data.ticket.totalCheckIn)}
          </Typography>
        </Grid> 
      }
    />
  );
}
