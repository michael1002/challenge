import React from 'react'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function ColorSelection({ shirts, value, changeValue }: any) {
  return (
    <>
      <Grid xs={12} marginTop={1} container justifyContent={'flex-start'} spacing={2} marginBottom={2}>
        <p>Color: <span style={{ 'fontWeight': 'bold' }}>{shirts[value].color}</span></p>
      </Grid>
      <Stack direction="row" spacing={3} marginLeft={-1} useFlexGap flexWrap="wrap">
        {shirts.map((element: any) =>
          <div onClick={() => changeValue(element.id)}>
            {element.id === value + 1 ?
              <Avatar src={element.icon} sx={{ border: '1px solid black' }} /> :
              <Avatar src={element.icon} />
            }
          </div>
        )}
      </Stack>
      <Divider variant='middle' style={{ 'marginTop': '10%', 'marginLeft': '-2%' }} />
    </>
  )
}
