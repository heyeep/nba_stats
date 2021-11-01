import React from 'react';
import { Group } from '@visx/group';
import { curveNatural } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import {  MarkerCircle } from '@visx/marker';

export const background = '#f7f7f7';

const getX = (d) => d.year;
const getY = (d) => d.amount

const defaultMargin = { top: 30, right: 20, bottom: 40, left: 30 };

export default function LineChart({ width, height, margin = defaultMargin, stats }) {
  if (width < 10) return null;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const yearScale = scaleLinear({
    domain: [
      Math.min(...stats.map(stat => stat.year)),
      Math.max(...stats.map(stat => stat.year))
    ],
  });

  const yScale = scaleLinear({
    domain: [
      Math.min(...stats.map(stat => stat.amount)),
      Math.max(...stats.map(stat => stat.amount)),
    ],
    nice: true,
  });

  yearScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  return (
    <div>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <MarkerCircle id="marker-circle" fill="#333" size={3} refX={2} />
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <GridColumns scale={yearScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <AxisBottom top={yMax} scale={yearScale} numTicks={stats.length} label="Year"/>
          <AxisLeft scale={yScale} />
          {
            stats.map((d, index) => (
              <circle
                key={d + index}
                r={3}
                cx={yearScale(getX(d))}
                cy={yScale(getY(d))}
                stroke="rgba(33,33,33,0.5)"
              />
            ))}
          <LinePath
            data={stats}
            curve={curveNatural}
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
