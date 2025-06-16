import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share'

export default function HeroDivider() {
  return (
    <Card  variant="outlined" sx={{ maxWidth: 660, height : 300 , borderRadius: 6, height : {xs : 500, md : 300}}}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div" fontWeight='800'>
            Learn Full Stack
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareIcon />
          </Typography>
        </Stack>
        <Typography variant="h3" sx={{ 
            background: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color:'transparent'
        }} fontWeight='800'>
            Full Web Development Using Java
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Download Syllabus" size="large" />
          <Chip color='warning' label="Apply Now" size="large" />
          {/* <Chip label="Hard" size="small" /> */}
        </Stack>
      </Box>
    </Card>
  );
}
