import React from 'react';
import { Group } from '@visx/group';
import { curveBasis } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';

export const background = '#f3f3f3';

const ppg = [
  {amount: 17.5, year: 2009},
  {amount: 18.6, year: 2010},
  {amount: 14.7, year: 2011},
  {amount: 22.9, year: 2012},
  {amount: 24.0, year: 2013},
  {amount: 23.8, year: 2014},
  {amount: 30.1, year: 2015},
  {amount: 25.3, year: 2016},
  {amount: 26.4, year: 2017},
  {amount: 27.3, year: 2018},
  {amount: 20.8, year: 2019},
  {amount: 32.0, year: 2020},
  {amount: 28.7, year: 2021}
]

const getX = (d) => d.year;
const getY = (d) => d.amount

const yearScale = scaleLinear({
  domain: [
    Math.min(...ppg.map(stat => stat.year)),
    Math.max(...ppg.map(stat => stat.year))
  ],
});

const yScale = scaleLinear({
  domain: [
    Math.min(...ppg.map(stat => stat.amount)),
    Math.max(...ppg.map(stat => stat.amount)),
  ],
  nice: true,
});

const defaultMargin = { top: 30, right: 20, bottom: 40, left: 30 };

export default function LineChart({ width, height, margin = defaultMargin, stats }) {
  console.log(stats)
  if (width < 10) return null;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  yearScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  return (
    <div>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <GridColumns scale={yearScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <AxisBottom top={yMax} scale={yearScale} numTicks={ppg.length} label="Year"/>
          <AxisLeft scale={yScale} />
          <LinePath
            data={ppg}
            curve={curveBasis}
            x={(d) => yearScale(getX(d)) ?? 0}
            y={(d) => yScale(getY(d)) ?? 0}
            stroke="#222"
            strokeWidth={1.5}
          />
        </Group>
      </svg>
    </div>
  );
}
