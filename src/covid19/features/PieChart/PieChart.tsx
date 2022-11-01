import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectData } from '../covidSlice';

export const PieChart: FC = () => {
  const data = useSelector(selectData);
  const motality = data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

  const pieChart = data && (
    <Doughnut
      data={{
        labels: ['感染者数', '回復者数', '死者数'],
        datasets: [
          {
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
            backgroundColor: ['rgba(0,0,255,0.5)', '#008080', 'rgba(255,0,0,0.5)'],
            borderColor: ['transparent', 'transparent', 'transparent'],
          },
        ],
      }}
      options={{
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  );
  return (
    <>
      {data.confirmed && (
        <Typography align="center" color="text.secondary" gutterBottom>
          Motarity {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
  );
};
