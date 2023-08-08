import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'
import './Footer.css';

export default function Footer({ shirts, value }: any) {
  return (
    <div className="footer">
      <p style={{ 'marginLeft': '3%' }}>{shirts[value].category}</p>
      <Button variant='contained' endIcon={<ShoppingBagOutlined />} sx={{ marginRight: '3%', backgroundColor: 'black', minWidth: '25%', justifyContent: 'space-between' }}>Add to cart</Button>
    </div>
  )
}
