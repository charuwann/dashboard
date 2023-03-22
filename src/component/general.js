import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Grid } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import data from "../data.json";
import CurrencyFormat from '../util/currency';
import CardCustom from '../commonComponent/cardCustom';

const eventTopic = {
  color: "#A6ACAF",
  fontWeight: 500,
  fontSize: "1.1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const icon = {
  color: "#A569BD",
  background: "#D7BDE2",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  padding: "5px",
  marginRight: "5px"
}

const saleTotal = {
  fontWeight: "bolder",
  fontSize: "1.8em",
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

export default function General() {
  const isMobile = useMediaQuery('(max-width:300px)');
  return (
    <CardCustom content={
      <Grid container direction="column"  justifyContent="center" alignItems="center">
        {isMobile && <ConfirmationNumberIcon sx={icon}/>}        
        <Typography sx={eventTopic}>
          {!isMobile && <ConfirmationNumberIcon sx={icon}/>}
          Total Ticket Sold
        </Typography>
        <Typography sx={saleTotal}>
          {CurrencyFormat(data.ticket.sold)}
        </Typography>
        <Chip 
          label={
            <div>
             <Typography sx={label}>
              {
                !isMobile && data.ticket.growthDirection === "up" ?
                <><TrendingUpIcon /><span style={{marginLeft: "5px"}}>+</span></>
                : ""
              }
              <span style={{margin: "0 5px"}}>{data.ticket.growth}</span>
              {!isMobile && `from last week`}
              </Typography>
            </div>
          }
          sx={saleGrowth}>
        </Chip>
      </Grid> 
    }/>
  );
}
