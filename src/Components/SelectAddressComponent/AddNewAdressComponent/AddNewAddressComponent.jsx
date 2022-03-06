import { Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { Component } from 'react'



class AddNewAddressComponent extends Component {
    render() {
        return (
            <>
                <Grid style={{
                    background: '#F0F2F9 ',
                    border: '1px dashed #1f1f1f',
                    borderRadius: '8px',
                    boxShadow: '-2px 3px 6px #0000000F',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <Grid style={{ margin: '0 auto', display:'flex',alignItems:'center',flexDirection:"column",padding:'2rem'}}>
                        <img src='https://cdn-icons-png.flaticon.com/512/684/684908.png' width='30px' height='30px' alt='map'/>
                       <Typography style={{color:'#1F1F1F',fontSize:'14px',fontFamily:'ProximaNova' ,fontWeight:'699'}}>Add New Address</Typography>
                    </Grid>
                </Grid>
            </>

        )
    }
}

export default AddNewAddressComponent