import { Box, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h4" component="h1">
        ホーム
      </Typography>
    </Box>
  )
}
