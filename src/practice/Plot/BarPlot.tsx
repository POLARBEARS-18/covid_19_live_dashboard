import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Demo Bar Plot',
      backgroundColor: '#20b2aa',
      borderColor: 'transparent',
      hoverBackgroundColor: '#5f9ea0',
      data: [50, 30, 90, 15, 30, 0, 100],
    },
  ],
};

export const BarPlot = () => (
  <div>
    <Bar data={data} />
    <HorizontalBar data={data} />
  </div>
);
