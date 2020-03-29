import React from 'react'
import {ResponsivePie} from '@nivo/pie'

export const PieChart = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 5, right: 80, bottom: 80, left: 0 }}
        startAngle={1}
        innerRadius={0.7}
        // padAngle={0.9}
        // cornerRadius={3}
        colors={d => d.color}
        borderWidth={3}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        // enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSlicesLabels={false}
        // slicesLabelsSkipAngle={10}
        // slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}

        legends={[
            {
                anchor: 'right',
                direction: 'column',
                // translateX: 30,
                itemWidth: 100,
                itemHeight: 40,
                symbolSize: 20,
                symbolShape: 'circle'
            }
        ]}
    />
)