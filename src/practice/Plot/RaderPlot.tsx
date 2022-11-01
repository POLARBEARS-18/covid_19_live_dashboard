import React, { FC } from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['React', 'Vue', 'Angular', 'JavaScript', 'TypeScript', 'Redux', 'RestApi'],
  datasets: [
    {
      label: 'Person A',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#008b8b',
      pointBackgroundColor: '#008b8b',
      pointBorderColor: '#fff',
      data: [5, 6, 9, 15, 30, 40, 80],
    },
    {
      label: 'Person B',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: '#ff1493',
      pointBackgroundColor: '#ff1493',
      pointBorderColor: '#fff',
      data: [50, 20, 49, 40, 50, 90, 20],
    },
  ],
};

export const RaderPlot: FC = () => (
  <div>
    <Radar data={data} />
  </div>
);
