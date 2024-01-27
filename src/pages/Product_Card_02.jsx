import React, { useState } from 'react'
import { Product_data_02 } from '../utils/Product_data_02'
import { Container, Grid, Stack } from '@mui/material'
import Product from './Product'
import Product_Card from './Product_Card'
export default function Product_Card_02() {
    const [data,setdata] = useState([...Product_data_02])
  return (
    <div>
      <>
        <Container maxWidth={false}>
            <Stack spacing={5}>
                <Grid container>
                    {
                        data.map((e,index)=>{
                            return <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Product_Card data={e} />
                                
                            </Grid>
                        })
                    }
                </Grid>
            </Stack>
        </Container>
      </>
    </div>
  )
}
