import { FormControl, NativeSelect } from '@mui/material';
import { useAppDispatch } from 'covid19/Redux/hooks';
import React, { FC } from 'react';
import { css } from '@emotion/react';
import { fetchAsyncGetCountry } from '../covidSlice';

export const SwitchCountry: FC = () => {
  const dispatch = useAppDispatch();

  const countries = [
    {
      id: 1,
      name: 'japan',
    },
    {
      id: 2,
      name: 'china',
    },
    {
      id: 3,
      name: 'us',
    },
    {
      id: 4,
      name: 'france',
    },
    {
      id: 5,
      name: 'italy',
    },
    {
      id: 6,
      name: 'spain',
    },
    {
      id: 7,
      name: 'united kingdom',
    },
    {
      id: 8,
      name: 'germany',
    },
    {
      id: 9,
      name: 'russia',
    },
    {
      id: 10,
      name: 'brazil',
    },
    {
      id: 11,
      name: 'taiwan',
    },
    {
      id: 12,
      name: 'thailand',
    },
    {
      id: 13,
      name: 'new zealand',
    },
    {
      id: 14,
      name: 'sweden',
    },
    {
      id: 15,
      name: 'india',
    },
  ];
  return (
    <FormControl css={SFormControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          void dispatch(fetchAsyncGetCountry(e.target.value));
        }}
      >
        <option value="">Worldwide</option>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

// const SFormControl = styled('div')(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   minWidth: 320,
// }));

const SFormControl = css`
  margin-bottom: 2em;
  min-width: 20em;
`;
