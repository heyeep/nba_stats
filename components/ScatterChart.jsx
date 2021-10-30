import React, { useMemo } from "react";
import { Group } from "@visx/group";
import { Circle } from "@visx/shape";
import { scaleLinear } from "@visx/scale";

export default function ScatterChart({ width, height, points }) {
  const xScale = useMemo(
    () =>
      scaleLinear({
        domain: [-(width / 2), width / 2],
        range: [0, width],
        clamp: true
      }),
    [width]
  )

  const yScale = useMemo(
    () =>
      scaleLinear({
        domain: [0, height],
        range: [height, 0],
        clamp: true
      }),
    [height]
  )

  return width < 10 ? null : (
    <div>
      <svg width={width} height={height}>
        <Group pointerEvents="none">
          {points.map((point, i) => (
            <Circle
              key={`point-${point[0]}-${i}`}
              className="dot"
              cx={xScale(point.locX)}
              cy={yScale(point.locY)}
              r={i % 2 === 0 ? 2 : 3}
              fill={point.eventType === 'Missed Shot' ? 'red' : 'teal'}
              opacity={0.4}
            />
          ))}
        </Group>
      </svg>
    </div>
  )
}
