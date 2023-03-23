import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography, Grid, Divider } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import Chip from "@mui/material/Chip";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import "../style/sale.css"
import dataJson from "../data.json";
import CurrencyFormat from "../util/currency";
import CardCustom from "../commonComponent/cardCustom";
import Loading from "../commonComponent/loading";

const eventTopic = {
  color: "#A6ACAF",
  fontWeight: 500,
  fontSize: "1.1rem",
  margin: "20px 0 0 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const eventContent = {
  fontWeight: 500,
  fontSize: "1rem",
  color: "#A6ACAF",
  textAlign: "left",
  display: "flex",
  alignItems: "center"
}

const icon = {
  color: "#F1C40F",
  background: "#F9E79F",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  padding: "5px",
  marginRight: "5px"
}

const iconisMobile = {
  color: "#F1C40F",
  background: "#F9E79F",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  padding: "5px",
}

const saleTotal = {
  fontWeight: "bolder",
  fontSize: "1.8em",
  lineHeight: 2,
  fontFamily: "Kanit-Bold"
}

const saleGrowth = {
  background: "#D5F5E3",
  color: "#16A085",
  display: "flex",
  alignItems: "center",
  fontWeight: 600
}

const label = {
  display: "flex",
  alignItems: "center",

}

export default function Sale() {
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
    <CardCustom content={
      <>
      <Grid style={{marginTop: "40px"}} container direction="column"  justifyContent="center" alignItems="center">
        {isMobile && <StarRateIcon sx={iconisMobile}/>}        
        <Typography variant="h5" sx={eventTopic}>
          {!isMobile && <StarRateIcon sx={icon}/>}
          Total Sales(THB)
        </Typography>
        {
          data ?
            <Typography sx={saleTotal}>
              {CurrencyFormat(data?.totalSale?.total)}
            </Typography>
          : <Loading height="15px" width="60%" margin="20px"/>
        }
        {
          data ? 
            <Chip 
              label={
                <div>
                <Typography sx={label}>
                  {
                    !isMobile && data?.totalSale?.growthDirection === "up" ?
                    <><TrendingUpIcon /><span style={{marginLeft: "5px"}}>+</span></>
                    : ""
                  }
                  <span style={{margin: "0 5px"}}>{data?.totalSale?.growth}</span>
                  {
                    !isMobile && `from last week`
                  }
                  </Typography>
                </div>
              }
              sx={saleGrowth}>
            </Chip>
          : <Loading height="20px" width="60%" margin="5px"/>
        }
      </Grid> 
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid container className="sale-content">
        <Typography variant="body2" sx={eventContent}>
          Platform fee (VAT incl.)
        </Typography>
        {
          data ? 
          <Typography variant="body2" sx={eventContent}>
            {CurrencyFormat(data?.totalSale?.plateformFee)}
          </Typography>
          : <Loading height="8px" width="30%" margin="5px"/>
        }
      </Grid>
      <Grid container className="sale-content">
        <Typography variant="body2" sx={eventContent}>
          Payment fee (VAT incl.)
        </Typography>
        {
          data ? 
          <Typography variant="body2" sx={eventContent}>
            {CurrencyFormat(data?.totalSale?.paymentFee)}
          </Typography>
          : <Loading height="8px" width="30%" margin="5px"/>
        }
      </Grid>
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid container className="sale-footer">
        <Typography variant="body2" sx={eventContent}>
          Net Sales
        </Typography>
        {
          data ? 
          <Typography variant="body2" sx={eventContent}>
            {CurrencyFormat(data?.totalSale?.netSale)}
          </Typography>
          : <Loading height="8px" width="30%" margin="5px"/>
        }
      </Grid>
      </>
    }/>
  );
}
