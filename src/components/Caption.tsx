import Box from '@mui/material/Box';
import ColorSelection from './ColorSelection';
import SizeSelection from './SizeSelection';
import ClothInformation from './ClothInformation';

export default function Caption({ shirts, value, changeValue, size, changeSize }: any) {
  return (
    <Box>
      <ClothInformation shirts={shirts} value={value} />
      <ColorSelection shirts={shirts} value={value} changeValue={changeValue} />
      <SizeSelection shirts={shirts} value={value} size={size} changeSize={changeSize} />
    </Box >
  )
}
