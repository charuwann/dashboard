import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography, Grid } from "@mui/material";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

import dataJson from "../data.json";
import CurrencyFormat from "../util/currency";
import CardCustom from "../commonComponent/cardCustom";
import Loading from "../commonComponent/loading";

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
  const [data, setData] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setData(() => dataJson);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <CardCustom
      content={
        <Grid container direction="column"  justifyContent="center" alignItems="center">
          {isMobile && <WhereToVoteIcon sx={icon}/>}
          <Typography sx={eventTopic}>
            {!isMobile && <WhereToVoteIcon sx={icon}/>}
            Total Check-in
          </Typography>
          {
            data ? 
            <Typography sx={saleTotal}>
            {CurrencyFormat(data.ticket.checkIn)} {!checkDivider ? "/" : <span><br/>/</span>} {CurrencyFormat(data.ticket.totalCheckIn)}
            </Typography>
            : <Loading height="15px" width="80%" margin="20px"/>
          }
        </Grid> 
      }
    />
  );
}
