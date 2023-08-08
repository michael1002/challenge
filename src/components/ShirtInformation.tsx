import { useEffect, useState } from 'react'
import Slider from './Slider';
import Caption from './Caption';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2';
import Footer from './Footer';

export default function ShirtInformation() {
  const [shirts, setShirts] = useState([]);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const request = await fetch('http://localhost:1337/api/v1/posts');
      const data = await request.json();
      setShirts(data);
      setLoading(false);
    }
    getData()
  }, []);

  const changeValue = (val: number) => {
    setColor(val - 1);
  }

  const changeSize = (val: number) => {
    setSize(val);
  }

  if (loading) return <h1>LOADING...</h1>

  return (
    <Box margin={5}>
      <Grid container xs={12} md={10} lg={12} spacing={2}>
        <Grid xs={12} md={8}>
          <Slider shirts={shirts} value={color} />
        </Grid>
        <Grid xs={12} md={4} paddingLeft={4}>
          <Caption shirts={shirts} value={color} changeValue={changeValue} size={size} changeSize={changeSize} />
        </Grid>
      </Grid>
      <Footer shirts={shirts} value={color} />
    </Box>
  )
}
