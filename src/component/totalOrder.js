import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Grid } from '@mui/material';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

import data from "../data.json";
import CurrencyFormat from "../util/currency";
import CardCustom from '../commonComponent/cardCustom';
// ----------------------------------------------------------------------

const eventTopic = {
  color: "#808B96",
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
  const mobile = useMediaQuery('(max-width:300px)');
  return (
    <CardCustom
      content={
        <Grid container direction="column"  justifyContent="center" alignItems="center">
          {mobile && <div style={iconBg}><ListOutlinedIcon sx={icon}/></div>}
          <Typography sx={eventTopic}>
            {!mobile && <div style={iconBg}><ListOutlinedIcon sx={icon}/></div>}
            Total Orders
          </Typography>
          <Typography sx={saleTotal}>
            {CurrencyFormat(data.ticket.order)}
          </Typography>
        </Grid> 
      }
    />
  );
}
