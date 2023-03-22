import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Grid } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import data from "../data.json";
import CardCustom from '../component/cardCustom';

const eventTopic = {
  color: "#808B96",
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
  const mobile = useMediaQuery('(max-width:300px)');
  return (
    <CardCustom content={
      <Grid container direction="column"  justifyContent="center" alignItems="center">
        {mobile && <ConfirmationNumberIcon sx={icon}/>}        
        <Typography sx={eventTopic}>
          {!mobile && <ConfirmationNumberIcon sx={icon}/>}
          Total Ticket Sold
        </Typography>
        <Typography sx={saleTotal}>
          {data.ticket.sold}
        </Typography>
        <Chip 
          label={
            <div>
             <Typography sx={label}>
              {
                !mobile && data.ticket.growthDirection === "up" ?
                <><TrendingUpIcon /> + </>
                : ""
              }
              {data.ticket.growth} 
              {!mobile && `from last week`}
              </Typography>
            </div>
          }
          sx={saleGrowth}>
        </Chip>
      </Grid> 
    }/>
  );
}
