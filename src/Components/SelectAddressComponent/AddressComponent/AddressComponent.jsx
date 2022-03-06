import { Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { Component } from 'react'



class AddressComponent extends Component {
    render() {
        return (
            <>
                <Grid style={{
                    background: '#FFFFFF',
                    border: '1px solid #1f1f1f',
                    borderRadius: '8px',
                    boxShadow: '-2px 3px 6px #0000000F',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <Grid style={{ margin: '1.5rem', }}>
                        <Grid style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                            <Typography style={{
                                color: 'color: #1F1F1F',
                                fontSize: '18px',
                                fontFamily: 'ProximaNova',
                                fontWeight: 'Bold'

                            }}>Saiteja Kudligi</Typography>
                            <div style={{
                                fontSize: '0.8rem', color: '#00A7EF', background: '#E3F3FF', border: '1px solid #A7DCFF', borderRadius: '6px', padding: '0.2rem',
                                fontFamily: 'ProximaNova',
                            }}>
                                <span>Home</span>
                            </div>
                        </Grid>
                        <Grid style={{ display: 'flex', flexDirection: 'column', rowGap: '0.3rem', color: '#000000CC' ,fontSize:'16px',fontFamily: 'ProximaNova' ,fontWeight:'599'}}>
                            <Grid>123-45, Somnath Nagar, Anantapur, </Grid>
                            <Grid>Andhra Pradesh, 515001</Grid>
                            <Grid> Mobile : 7981234567</Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        style={{ marginRight: '0.5rem' }}
                    ><MoreVertIcon /></Grid>
                </Grid>
            </>

        )
    }
}

export default AddressComponent