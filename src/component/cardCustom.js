import { Card } from '@mui/material';

const cardStyle = {
  minHeight: "100%", 
  padding: "10px 20px 0 20px", 
  borderRadius: "10px", 
  boxShadow: "1px 1px 10px #EEEEEE"
}

function CardCustom({content}) {
  return (
    <>
      <Card sx={cardStyle}>
        {content}
      </Card>
    </>
  );
}

export default CardCustom;