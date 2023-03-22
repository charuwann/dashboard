import './App.css';
import Dashboard from "./page/dashboard"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <Dashboard/>
      </div>
    </ThemeProvider>
  );
}

export default App;