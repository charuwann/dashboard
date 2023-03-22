import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Grid, Divider } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import "../style/sale.css"
import data from "../data.json";
import CurrencyFormat from '../util/currency';
import CardCustom from '../commonComponent/cardCustom';

const eventTopic = {
  color: "#808B96",
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
  color: "#808B96",
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

const iconMobile = {
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
  lineHeight: 2
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
  const mobile = useMediaQuery('(max-width:300px)');
  return (
    <CardCustom content={
      <>
      <Grid style={{marginTop: "40px"}} container direction="column"  justifyContent="center" alignItems="center">
        {mobile && <StarRateIcon sx={iconMobile}/>}        
        <Typography variant="h5" sx={eventTopic}>
          {!mobile && <StarRateIcon sx={icon}/>}
          Total Sales(THB)
        </Typography>
        <Typography sx={saleTotal}>
          {CurrencyFormat(data.totalSale.total)}
        </Typography>
        <Chip 
          label={
            <div>
             <Typography sx={label}>
              {
                !mobile && data.totalSale.growthDirection === "up" ?
                <><TrendingUpIcon /> +</>
                : ""
              }
              {data.totalSale.growth}
              {
                !mobile && `from last week`
              }
              </Typography>
            </div>
          }
          sx={saleGrowth}>
        </Chip>
      </Grid> 
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid container className="sale-content">
        <Typography variant="body2" sx={eventContent}>
          Platform fee (VAT incl.)
        </Typography>
        {mobile && <br/>}
        <Typography variant="body2" sx={eventContent}>
          {data.totalSale.plateformFee}
        </Typography>
      </Grid>
      <Grid container className="sale-content">
        <Typography variant="body2" sx={eventContent}>
          Payment fee (VAT incl.)
        </Typography>
        {mobile && <br/>}
        <Typography variant="body2" sx={eventContent}>
          {data.totalSale.paymentFee}
        </Typography>
      </Grid>
      <Divider style={{margin: "10px 0"}}></Divider>
      <Grid container className="sale-footer">
        <Typography variant="body2" sx={eventContent}>
          Net Sales
        </Typography>
        <Typography variant="body2" sx={eventContent}>
          {data.totalSale.netSale}
        </Typography>
      </Grid>
      </>
    }/>
  );
}
