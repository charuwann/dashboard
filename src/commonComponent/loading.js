import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function Loading({height=10, width="100%", ...props}) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: height,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 20,
      backgroundColor: theme.palette.mode === 'light' ? '#D5DBDB' : '#B2BABB',
    },
  }));
  return (
    <div style={{width: width, ...props}}>
      <BorderLinearProgress variant="indeterminate" />
    </div>
  );
}