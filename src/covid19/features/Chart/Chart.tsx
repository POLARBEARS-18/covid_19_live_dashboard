import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectCountry, selectDailyData, selectData } from '../covidSlice';

export const Chart: FC = () => {
  const data = useSelector(selectData);
  const dailyData = useSelector(selectDailyData);
  const country = useSelector(selectCountry);

  const barChart = data && (
    <Bar
      data={{
        labels: ['感染者', '回復者', '死者'],
        datasets: [
          {
            backgroundColor: ['rgba(0,0,255,0.5)', '#008080', 'rgba(255,0,0,0.5)'],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Latest status in ${country}` },
      }}
    />
  );

  const lineChart = data && (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map((confirmedData) => confirmedData.confirmed.total),
            label: '感染者数',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map((deathData) => deathData.deaths.total),
            label: '死者数',
            borderColor: '#ff3370',
            fill: true,
          },
        ],
      }}
    />
  );

  return <div css={SChartContainer}>{country.length ? barChart : lineChart}</div>;
};

const SChartContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
