import { Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import React, { Component } from 'react'
import AddressComponent from './AddressComponent/AddressComponent.jsx'
import PriceDetailsComponent from './PriceDetailsComponent/PriceDetailsComponent.jsx'
import AddNewAddressComponent from './AddNewAdressComponent/AddNewAddressComponent.jsx'
import EstimatedDeliveryComponent from './EstimatedDeliveryComponent/EstimatedDeliveryComponent.jsx'



class SelectAddressComponent extends Component {
    render() {
        return (
            <>
                <Grid style={{ display: 'flex', marginLeft: '150px', columnGap: '5rem' }}>
                    <Grid style={{ width: '100%', display: "flex", flexDirection: 'column', rowGap: '2rem',fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'599' }} >
                        <div
                            style={{ marginTop: '2rem',}}
                            role="presentation" onClick={() => { }}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                style={{fontSize:'14px',fontFamily:'ProximaNova',fontWeight:'699',color:'#00000066'}}
                                 underline="hover"  href="/">
                                    Home
                                </Link>
                                <Link
                                style={{fontSize:'14px',fontFamily:'ProximaNova',fontWeight:'699',color:'#00000066'}}
                                    underline="hover"
                                    href="/"
                                >
                                    Product
                                </Link>
                                <Link
                                style={{fontSize:'14px',fontFamily:'ProximaNova',fontWeight:'699',color:'#00000066'}}
                                    underline="hover"
                                    href="/"
                                >
                                    Cart
                                </Link>

                                <Typography style={{color:'#000000CC',fontSize:'14px',fontFamily:'ProximaNova',fontWeight:'699' }}>Select Address</Typography>
                            </Breadcrumbs>
                        </div>
                        <Grid>
                            <AddressComponent />
                        </Grid>
                        <Grid>
                            <AddressComponent />
                        </Grid>
                        <Grid>
                            <AddNewAddressComponent />
                        </Grid>
                        <Grid style={{display:'flex' ,flexDirection:'column',rowGap:'1rem'}}>
                            <Typography style={{color:'#000000',fontSize:'28px',fontFamily:'ProximaNova',fontWeight:'699' }}>Estimated delivery</Typography>
                            <EstimatedDeliveryComponent />
                            <EstimatedDeliveryComponent />
                        </Grid>
                    </Grid>
                    <Grid style={{ width: '100%' }}>
                        <PriceDetailsComponent />
                        <Grid style={{display:'flex',rowGap:'0.5rem',flexDirection:'column',marginTop:'1rem',}}>
                            <Typography style={{ color: '#00000099',fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'399' }}>
                                Facing issues with this order?
                            </Typography>
                            <Typography style={{ color: '#1F1F1F' ,fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'699'}}>
                                NEED HELP?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </>

        )
    }
}

export default SelectAddressComponent