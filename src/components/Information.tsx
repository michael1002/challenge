import React from 'react'
import Slider from './Slider';
import Caption from './Caption';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2';

export default function Information() {
  return (
    <Box margin={5}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Slider />
        </Grid>
        <Grid xs={6} md={4}>
          <p>Hier kommt die Caption</p>
        </Grid>
      </Grid>
    </Box>
  )
}
