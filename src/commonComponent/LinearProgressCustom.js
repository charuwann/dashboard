import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography, Divider, Grid } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const topicStyle = {
  fontWeight: 600,
  fontSize: "1.1rem",
  color: "#000",
  fontFamily: "Kanit-Bold"
}

const sub = {
  fontWeight: 500,
  fontSize: "1rem",
  width: 50,
  textAlign: "right",
  fontFamily: "Kanit-Medium"
}

const subMobile = {
  fontWeight: 500,
  fontSize: "1rem",
  width: 40,
  textAlign: "left",
  fontFamily: "Kanit-Medium"
}

const subPercent = {
  fontWeight: 400,
  fontSize: "0.9rem",
  width: 35,
  textAlign: "left"
}

function LinearProgressCustom({color, valuePercent, item, itemTotal, topic}) {
  const isMobile = useMediaQuery("(max-width:830px)");  
  const progress = {
    strokeLinecap: "round",
    height: 7,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: `${color}`,
    },
  }

  return (<>
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item >
        <Typography sx={topicStyle}>
          {topic}
        </Typography>
      </Grid>
      <Grid item xs={isMobile ? 12 : 0}>
        { itemTotal && 
            <Grid container alignItems="end">
              <Grid item><Typography sx={isMobile ? subMobile :sub}>{item}/{itemTotal}</Typography></Grid>
              <Divider sx={{margin: "0 6px"}} orientation="vertical" flexItem/>
              <Grid item><Typography sx={subPercent}>{Math.round(valuePercent)}%</Typography></Grid>
            </Grid>
        }
      </Grid>
    </Grid>
    <LinearProgress sx={progress} variant="determinate" value={valuePercent}/>
  </>);
}

export default LinearProgressCustom;