import { Stack } from '@mui/material'
import React from 'react'
import FirstBox from './firstBox'
import SecondBox from './secondBox'
import ThirdBox from './thirdBox'

function Boxes() {
    return (
        <Stack margin={{xs: '40px 20px '  , md :'4px'}} style={{ width : {xs: '70%' , md : '90%'} }} direction={{xs: 'column' , md: 'row' }} gap={2}  >
<FirstBox flex={2} />
<SecondBox flex={1} ></SecondBox>
<ThirdBox flex={1} />
        </Stack>
    )
}

export default Boxes
