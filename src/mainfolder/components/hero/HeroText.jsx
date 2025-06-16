import { Box, Typography } from "@mui/material"
import HeroDivider from "./HeroDivider"

export const HeroText = () => {
    return(
        <Box sx={{
            
            width:'100%',
            height:{xs: "100%", sm: "100%"},
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            marginTop: {xs: '20px', sm: '20px'}
        }}>
            <Box>
                <HeroDivider />
            </Box>
        </Box>
    )
}