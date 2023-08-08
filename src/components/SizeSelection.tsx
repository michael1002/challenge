import Grid from '@mui/material/Unstable_Grid2';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SizeSelection({ shirts, value, size, changeSize }: any) {
  return (
    <>
      <Grid xs={12} marginTop={1} container justifyContent={'flex-start'} spacing={2} marginBottom={1}>
        <Grid><p>Size: <span style={{ 'fontWeight': 'bold' }}>{shirts[value].sizes[size]}</span></p></Grid>
      </Grid>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" marginLeft={-1} marginBottom={9}>
        {shirts[value].sizes.map((element: any, key: any) =>
          <div onClick={() => changeSize(key)}>
            {key === size ?
              <Chip label={element} sx={{ minWidth: '70px', border: '1px solid black' }} /> :
              <Chip label={element} sx={{ minWidth: '70px' }} />
            }
          </div>
        )
        }
      </Stack>
    </>
  )
}
