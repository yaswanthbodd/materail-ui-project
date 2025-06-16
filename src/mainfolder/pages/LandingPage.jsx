import { Box, Container } from "@mui/material"
import NavBar from "../components/navsection/Navbar"
import { HeroSection } from "../components/hero/HeroSection"
import AccordionSection from "../components/AccordionSection"
import { CardDisplay } from "../components/cardsection/CardDisplay"
import MainTab from "../components/tabsection/MainTab"
import { MainGraph } from "../components/graphsection/MainGraph"



export const LandingPage = ({mode, setMode})=>{
    return(
        <Container>
            <Box>
                <NavBar mode={mode} setMode={setMode}/>
                <HeroSection />
                <AccordionSection />
                <CardDisplay />
                <MainTab />
                <MainGraph />
            </Box>
        </Container>
    )
}