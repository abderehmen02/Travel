import React from 'react'
import { Stack , styled  , Box} from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Dots({componentNumber}) {
const NonSelectedComponentDot = styled(FiberManualRecordIcon)(({theme})=>({
    color : theme.palette.dark.lighter
}))
const SelectedComponentDot = styled(FiberManualRecordIcon)(({theme})=>({
   color : theme.palette.dark.main 
}))
    return (<Stack gap={2} direction='row'  >
{[1,2,3].map((item , index)=>{ return <Box> {index === componentNumber ? <SelectedComponentDot /> : <NonSelectedComponentDot/> }
</Box>
})}
        </Stack>
    )
}

export default Dots