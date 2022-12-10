import { createTheme} from '@mui/material/styles';


const  theme   = createTheme({
  spacing : [ 0 , 8,16,24,32,40,48,56,64,72,80] , 
  palette: {
    primary: {
      main: "#14FF26",
      dark : '#20B32C'
    },
    secondary: {
        main : '#FF922E' ,
        dark : '#B35905'
    },
    pink : {
        main : '#652EFF'
    } , 
    dark : {
      dark : '#000000' , 
      main : '#333333' ,
      light : '#4D4D4D',
      lighter : '#D5D3D3'
    } ,
    white :{
      dark : '#E5E5E5' ,
      main : '#F3F3F3' ,
      light : '#ffffff' ,
    }
  },
  typography : {

      h1 : {
          fontFamily : 'Alexandria, sans-serif ' ,
          fontSize : 48 , 
          fontWeight : 'bold' ,
          textAlign : 'center'
      } , 
      h2 : {
        fontFamily: 'Alexandria, sans-serif' ,
        fontSize : 40 ,
        textAlign : 'center'

      } ,
      h3 : {
        fontFamily: 'Alexandria, sans-serif' ,
         fontSize : 32 ,
         fontWeight : 'lighter' ,
         textAlign : 'center'

      } ,
      h4 : {
          fontSize : 24 , 
          fontWeight : 'bold' ,
          textAlign : 'center'

      }   ,
      h5 : {
          fontSize : 16 , 
          textAlign : 'center'

      }
        } ,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            // border: `2px solid #000`,
            color : '#fff' ,
            backgroundColor : '#000' ,
            borderRadius : '16px' ,
            fontSize : 'larger' ,
            padding: '8px 16px' ,
            boxShadow : '2px 2px 4px black' ,
            "&:hover"  : {
              color : '#000' ,
              backgroundColor  :'#fff' ,
            //  border : '2px solid #ffffff' 
            }
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            backgroundColor : '#652EFF' ,
            color : '#ffffff' ,
            borderRadius : '16px' ,
            padding: '8px 16px' ,
            fontSize : 'larger' ,
            boxShadow : '2px 2px 4px #black' ,
            "&:hover"  : {
              color : '#652EFF' ,
              backgroundColor  :'#ffffff' ,
             border : '2px solid #652EFF' 
            }
          },
        },
      ],
    },
  },
});
theme.typography.h1 = {
  fontFamily : 'Alexandria, sans-serif ' ,
  fontSize : 48 , 
  fontWeight : 'bold',
  textAlign : 'center' ,

[theme.breakpoints.down('sm')] : {
    fontSize: 32,
  } ,
}
theme.typography.h2 = {
  fontFamily: 'Alexandria, sans-serif' ,
  fontSize : 40 ,
  textAlign : 'center' ,
[theme.breakpoints.down("sm")] : {
    fontSize  : 16
  }
}  
theme.typography.h3 = {
  fontFamily: 'Alexandria, sans-serif' ,
  fontSize : 32 ,
  fontWeight : 'lighter' ,
  textAlign : 'center' ,
}
theme.typography.h4 = {
  fontSize : 24 , 
  fontWeight : 'bold' ,
  textAlign : 'center' ,
}
theme.typography.h5 = {
  fontSize : 16 , 
  textAlign : 'center' ,
}

export default theme