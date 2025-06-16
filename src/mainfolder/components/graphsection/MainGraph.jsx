import { Stack } from "@mui/material"
import FirstChart from "./FirstChart"
import SecondChart from "./SecondChart"

export const MainGraph = () => {
    return(
        <Stack direction={'row'} sx={{ display : {xs : 'block', sm: 'block', md : 'flex', lg: 'flex'}}}>
            <FirstChart />
            <SecondChart />
        </Stack>
    )
}