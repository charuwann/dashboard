import "../App.css"
import "../style/dashboard.css"
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';

import Event from '../component/event';
import Sale from '../component/sale';
import General from '../component/general';
import TotalOrder from '../component/totalOrder';
import TotalCheckIn from '../component/totalCheckIn';
import TicketChart from '../component/ticketChart';
import AdmissionChart from '../component/AdmissionChart';


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
  const price = 100000;

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat().format(price);

  console.log(USDollar);
  // The formated version of 14340 is $14,340.00
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
