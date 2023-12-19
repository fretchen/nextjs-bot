import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import CreateRegion from "./CreateRegion";
import DocumentRegion from "./DocumentView";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Define the LeftRegion component
function LeftRegion({ reports }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DocumentRegion reports={reports}/>
        </Grid>
         <Grid item xs={12}>
          <CreateRegion/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LeftRegion;
