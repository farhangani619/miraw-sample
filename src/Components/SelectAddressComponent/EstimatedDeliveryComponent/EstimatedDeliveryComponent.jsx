
import { Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { Component } from 'react'
import image1 from '../../../ImageAssests/image1.png'



class EstimatedDeliveryComponent extends Component {
    render() {
        return (
            <>
                <Grid style={{
                    background: '#FFFFFF',
                    border: "2px solid #F0F2F9",
                    boxShadow: '-2px 3px 6px #0000000F',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.2rem'
                }}>
                    <Grid>
                        <Typography style={{color: '#000000DE',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>Estimated delivery by <span style={{color:'#1F1F1F',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'799'}}>24 Jan 2022</span></Typography>
                    </Grid>
                    <Grid style={{ display: 'flex', columnGap: '1rem', marginTop: '1rem' }}>
                        <Grid>
                            <img style={{ width: '89px', height: '115px' }} src={image1} alt='image' />
                        </Grid>
                        <Grid style={{display:'flex',flexDirection:'column',rowGap:'0.4rem'}}>
                            <Typography style={{ color: '#1F1F1F',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'699' }}>Adidas</Typography>
                            <Typography style={{ color: '#00000099' ,fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>Blue floral print cotton salwar stitched</Typography>
                            <Typography >
                                < span style={{ color: '#000000DE',fontSize:'16px',fontFamily:'ProximaNova' ,fontWeight:'699' }}>₹8,822 </span>
                                <span style={{color:'#00000099',fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'699'}}> ₹11,822 </span>
                                <span style={{color:'#1DAF3A',fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'699'}}> (25% OFF) </span>
                            </Typography>
                            <Typography style={{color:'#00000099',fontSize:'12px',fontFamily:'ProximaNova' ,fontWeight:'599'}}>SKU Code - 123564778</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </>

        )
    }
}

export default EstimatedDeliveryComponent