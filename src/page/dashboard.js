import "../App.css"
import "../style/dashboard.css"
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';

import Event from './event';
import Sale from './sale';
import General from './general';
import TotalOrder from './totalOrder';
import TotalCheckIn from './totalCheckIn';
import TicketChart from './ticketChart';
import AdmissionChart from './AdmissionChart';


const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingBottom: theme.spacing(10),
  marginTop: "50px"
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <StyledRoot className="App">
      <Main className="main">
        <Container maxWidth="xl">
          <Grid container spacing={2} rowSpacing={3}>
            <Grid container item xs={12} sm={6} md={6} lg={4}>
                  <Grid item xs={12}>
                    <Event />
                  </Grid>
                </Grid>
                <Grid container item xs={12} sm={6} md={6} lg={4}>
                  <Grid item xs={12}><Sale/></Grid>
                </Grid>
                <Grid 
                  container
                  item
                  direction="row"
                  xs={12} sm={6} md={6} lg={4}
                  spacing={2} 
                  rowSpacing={3}
                >
                  <Grid item xs={12}><General/></Grid>
                  <Grid item xs={12}><TotalOrder/></Grid>
                  <Grid item xs={12}><TotalCheckIn/></Grid>
                </Grid>
            <Grid container item spacing={2} rowSpacing={5}>
              <Grid item md={6} sm={6} xs={12}>
                <TicketChart />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <AdmissionChart />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Main>
    </StyledRoot>
  );
}
