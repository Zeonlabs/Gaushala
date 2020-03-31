import React from "react";
import { ResponsiveLine } from "@nivo/line";

export const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    lineWidth={3}
    margin={{ top: 10, right: 100, bottom: 70, left: 80 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      // legend: 'Month',
      legendOffset: 36,
      legendPosition: "middle"
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 10,
      tickRotation: 0,
      legend: "Amount",
      legendOffset: -65,
      legendPosition: "middle"
    }}
    curve="monotoneX"
    colors={d => d.color}
    pointSize={5}
    pointBorderWidth={5}
    // enableArea = {true}
    pointColor={{ theme: "background" }}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);
