import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

export default function ClothInformation({ shirts, value }: any) {
  return (
    <>
      <Grid container spacing={2} marginTop={8}>
        <Grid xs={12} container justifyContent={'flex-start'} fontWeight={600}>
          Brand New
        </Grid>
        <Grid xs={12} marginTop={1} container justifyContent={'flex-start'}>
          {shirts[value].category}
        </Grid>
        <Grid xs={12} marginTop={3} fontWeight={700} container justifyContent={'flex-start'}>
          {shirts[value].price} EUR
        </Grid>
      </Grid>
      <Divider variant='middle' style={{ 'marginTop': '10%', 'marginLeft': '-2%' }} />
    </>
  )
}
