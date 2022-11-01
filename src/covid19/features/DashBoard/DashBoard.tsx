import { css } from '@emotion/react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch } from 'covid19/Redux/hooks';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Cards } from '../Cards/Cards';
import { Chart } from '../Chart/Chart';
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from '../covidSlice';
import { PieChart } from '../PieChart/PieChart';
import { SwitchCountry } from '../SwitchCountry/SwitchCountry';

export const DashBoard: FC = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    void dispatch(fetchAsyncGet());
    void dispatch(fetchAsyncGetDaily());
  }, [dispatch]);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" css={STitle}>
            Covid 19 Live Dashboard
          </Typography>
          {data && <Typography>{new Date(data.lastUpdate).toDateString()}</Typography>}
        </Toolbar>
      </AppBar>
      <Container css={SContent}>
        <div css={SContainer}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>

          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>

          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const STitle = css`
  flex-grow: 1;
`;

const SContent = css`
  margin-top: 5.3125em;
`;

const SContainer = css``;
