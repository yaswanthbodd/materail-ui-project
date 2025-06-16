import { Stack } from "@mui/material"
import FirstCard from "./FirstCard"
import SecondCard from "./SecondCard"
import ThirdCard from "./ThirdCard"

export const CardDisplay = ()=>{
    return(
        <Stack direction={'row'} gap={3} m={5} sx={{ display : {xs: 'block', sm: 'flex', md: 'flex', lg: 'flex'}}}> 
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </Stack>
    )
}