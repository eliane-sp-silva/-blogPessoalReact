import './Footer.css'
import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from '@mui/material'

function Footer() {
  return (
    <><Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
          <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.linkedin.com/in/elianespsilva-dev/" target="_blank">
              <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
            </a>
            <a href="https://www.instagram.com/elianespsilva/" target="_blank">
              <InstagramIcon style={{ fontSize: 40, color: "white" }} />
            </a>
            <a href="https://github.com/eliane-sp-silva" target="_blank">
              <GitHubIcon style={{ fontSize: 40, color: "white" }} />
            </a>
          </Box>
        </Box>
        <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
          <Box paddingTop={1}>
            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org">
              <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>

    </>
  )
}

export default Footer