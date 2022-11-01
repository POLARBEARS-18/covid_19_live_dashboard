import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

export const MaterialUI: FC = () => (
  <div>
    <Typography color="secondary" variant="h1">
      Hello UI
    </Typography>
    <Button variant="contained" color="primary">
      Button
    </Button>
  </div>
);
