import Button from '@mui/material/Button';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'
import './Footer.css';

export default function Footer({ shirts, value }: any) {
  return (
    <div className="footer">
      <p style={{ 'marginLeft': '3%' }}>{shirts[value].category}</p>
      <Button variant='contained' endIcon={<ShoppingBagOutlined />} sx={{ marginRight: '3%', backgroundColor: 'black', minWidth: '25%', justifyContent: 'space-between', textTransform: 'none', ":hover": { bgcolor: '#d23048' } }}>Add to Cart</Button>
    </div>
  )
}
