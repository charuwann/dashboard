import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Divider, Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const topicStyle = {
  fontWeight: 600,
  fontSize: "1.1rem",
  color: "#000"
}

const sub = {
  fontWeight: 600,
  fontSize: "1.1rem",
}

const subPercent = {
  fontWeight: 400,
  fontSize: "1rem",
}

function LinearProgressCustom({color, valuePercent, item, itemTotal, topic}) {
  const isMobile = useMediaQuery('(max-width:830px)');  
  const progress = {
    strokeLinecap: 'round',
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
      <Grid item xs={isMobile ? 12 : 0} sx={{display: "flex", alignItems: "center"}}>
        {itemTotal &&
          <>
          <Typography sx={sub}>{item}/{itemTotal}</Typography>
          <Divider sx={{margin: "0 10px"}} orientation="vertical" flexItem/>
          <Typography sx={subPercent}>{Math.round(valuePercent)}%</Typography>
          </>
        }
      </Grid>
    </Grid>
    <LinearProgress sx={progress} variant="determinate" value={valuePercent}/>
  </>);
}

export default LinearProgressCustom;