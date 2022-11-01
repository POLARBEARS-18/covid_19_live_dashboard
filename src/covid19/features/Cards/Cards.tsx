import { Card, CardContent, css, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { MdLocalHospital } from 'react-icons/md';
import { GiHastyGrave } from 'react-icons/gi';
import { AiFillLike } from 'react-icons/ai';
import CountUp from 'react-countup';
import { selectData } from '../covidSlice';

export const Cards: FC = () => {
  const data = useSelector(selectData);
  return (
    <div css={SContainer}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3} component={Card} css={SCountCard(infectedColor)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              <MdLocalHospital />
              感染者数
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.confirmed.value} duration={1.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} css={SCountCard(recoveredColor)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              <AiFillLike /> 回復者数
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.recovered.value} duration={1.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} css={SCountCard(deathsColor)}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              <GiHastyGrave /> 死者数
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.deaths.value} duration={1.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

const infectedColor = '#33a3ff';
const recoveredColor = '#3cb371';
const deathsColor = '#ff3370';

const SContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.625em;
`;

const SCountCard = (color: string) => css`
  border-left: 0.3125em solid ${color};
  border-radius: 0%;
  margin: 2% 2%;
`;
