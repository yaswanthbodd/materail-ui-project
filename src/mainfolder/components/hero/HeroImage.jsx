import { Box } from "@mui/material"

export const HeroImage = ()=>{
    return(
        <Box sx={{
            width:'420px',
            display:'flex',
            flexDirection : 'center',
            justifyContent : 'center',
            alignItems : 'center',
            textAlign : 'center',
            width : '100%'
        }}>
            <img src="assests/images/student_image.png" style={{width:'100%'}}/>
        </Box>
    )
}