import { Stack } from '@mui/material'
import React from 'react'
import FirstBox from './firstBox'
import SecondBox from './secondBox'
import ThirdBox from './thirdBox'

function Boxes() {
    return (
        <Stack style={{ width : '90%' }} direction='row' gap={2}  >
<FirstBox flex={2} /> 
<SecondBox flex={1} ></SecondBox>
<ThirdBox flex={1} />
        </Stack>
    )
}

export default Boxes
