import { Breadcrumbs, Grid, Link, Typography, Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { Component } from 'react'



class PriceDetailsComponent extends Component {
    render() {
        return (
            <>
                <Grid style={{
                    background: '#FFFFFF',
                    boxShadow: '-2px 3px 10px #0000000F',
                    borderRadius: '8px',
                    padding:'1.5rem',
                    width:'70%',
                    marginTop:'5rem'
                }}>
                    <Grid>
                        <Typography style={{color: "#1F1F1F",fontSize:'20px',fontFamily:'ProximaNova' ,fontWeight:'bold'}}>Price Details</Typography>
                    </Grid>
                    <Grid style={{marginTop:'0.8rem',marginBottom:'0.8rem' ,display:'flex',flexDirection:"column",rowGap:'0.6rem'}}>
                        <Grid style={{display:'flex',justifyContent:'space-between',color:"#00000099",fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>
                            <Typography>Items Total</Typography>
                            <Typography>₹929.0</Typography>

                        </Grid>
                        <Grid style={{display:'flex',justifyContent:'space-between',color:"#1DAF3A",fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>
                            <Typography>Total Savings</Typography>
                            <Typography>₹47.0</Typography>

                        </Grid>
                        <Grid style={{display:'flex',justifyContent:'space-between',color:"#1DAF3A",fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>
                            <Typography>Coupon Discount</Typography>
                            <Typography>₹88.2</Typography>

                        </Grid>
                        <Grid style={{display:'flex',justifyContent:'space-between',color:"#00000099",fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>
                            <Typography>Delivery Charges</Typography>
                            <Typography>₹0</Typography>

                        </Grid>
                        <Grid style={{display:'flex',justifyContent:'space-between',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'700'}}>
                            <Typography>Total Amount</Typography>
                            <Typography>₹793.8</Typography>

                        </Grid>
                        <Grid style={{display:'flex',columnGap:'0.5rem',alignItems:'center'}}>
                            <input type='checkbox' style={{width:'1.5rem',height:'1.5rem',accentColor: '#1f1f1f'}} />
                            <Typography style={{color:'#000000CC',fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>Are you gifting to someone ?</Typography>
                        </Grid>
                        <Grid style={{display:'flex',justifyContent:'space-between', borderTop:'2px solid #F0F2F9', borderBottom:'2px solid #F0F2F9',padding:'1rem 0 1rem 0'}}>
                            <Typography style={{color:'#1f1f1f',fontSize:'20px',fontFamily:'ProximaNova' ,fontWeight:'bold'}}>Apply Coupon Code</Typography>
                            <span style={{fontSize:'30px',fontFamily:'ProximaNova' ,fontWeight:'bold'}}>{'>'}</span>
                        </Grid>
                        <Grid>
                            <Button style={{background:'#1F1F1F',width:'100%',padding:'0.8rem',borderRadius:'8px',color:'#fff',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'bold'}}>Checkout</Button>
                        </Grid>
                        <Grid>
                            <Button
                            style={{background:'#fff',width:'100%',padding:'0.8rem',borderRadius:'8px',color:'#1F1F1F',border: '1px solid #1F1F1F',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'bold'}}
                            >Continue Shopping</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </>

        )
    }
}

export default PriceDetailsComponent