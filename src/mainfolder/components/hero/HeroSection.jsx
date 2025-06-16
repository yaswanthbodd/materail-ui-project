import { Stack,Box } from "@mui/material"
import { HeroText } from "./HeroText"
import { HeroImage } from "./HeroImage"

export const HeroSection = ()=>{
    return(
        <Stack direction={"row"} spacing={3} justifyContent={'space-between'} sx={{ display:{xs : 'block', sm: 'block', md:'flex'}}}>
            <Box sx={{flex : '2'}}>
                <HeroText />
            </Box>
            <Box sx={{flex : '1'}}>
                <HeroImage />
            </Box>
        </Stack>
    )
}