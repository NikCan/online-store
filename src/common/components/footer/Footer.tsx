import {FC} from "react"
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

export const Footer: FC = () => {

    return (
        <Container style={{width: "100%", padding: '0px', margin: '0px', maxWidth: 'none'}}>
            <Box sx={{
                display: 'flex', bgcolor: '#121212', height: '70px', color: 'white', justifyContent: 'center',
                alignItems: 'center', pl: 1,
            }}>
                Copyright © Motorcycle equipment by MyTheme. All rights reserved.
            </Box>
        </Container>
    )
}
