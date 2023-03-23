import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography, Grid } from "@mui/material";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

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

const icon = {
  color: "#21618C",
  background: "#5DADE2",
  borderRadius: "10%",
  width: "15px",
  height: "15px",
  padding: "1px",
}

const saleTotal = {
  fontWeight: "bolder",
  fontSize: "1.8em",
  fontFamily: "Kanit-Bold"
}

const iconBg = {
  borderRadius: "50%",
  background: "#EBF5FB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 30,
  height: 30,
  marginRight: 5
}

export default function TotalOrder() {
  const isMobile = useMediaQuery("(max-width:300px)");
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
          {isMobile && <div style={iconBg}><ListOutlinedIcon sx={icon}/></div>}
          <Typography sx={eventTopic}>
            {!isMobile && <div style={iconBg}><ListOutlinedIcon sx={icon}/></div>}
            Total Orders
          </Typography>
          {
            data ? 
            <Typography sx={saleTotal}>
            {CurrencyFormat(data.ticket.order)}
          </Typography>
            : <Loading height="15px" width="60%" margin="20px"/>
          }
          
        </Grid> 
      }
    />
  );
}
