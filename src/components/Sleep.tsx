import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Sleep = () => {
    const data = [10.2, 6.3, 5.8, 2.5, 8.7, 7.5, 9.8];
    const lastData = [8.2, 7.1, 6.2, 5.5, 11.2, 4.2, 5.5];
    const hour = ['2h', '4h', '6h', '8h', '10h', '12h'];
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const svg = canvas
            .append('svg')
            .attr('width', 350)
            .attr('height', 220)

        data.forEach((item, index) => {
            svg.append('rect')
                .attr('x', (index + 1) * 40)
                .attr('y', 200)
                .attr('width', 30)
                .attr('height', 0)
                .attr('fill', 'blue')
                .transition()
                .duration(1000)
                .attr('height', item / 12 * 177)
                .attr('y', 200 - item / 12 * 177)
            svg.append('text')
                .attr('x', (index + 1) * 40)
                .attr('y', 200)
                .text(`${item}h`)
                .style('fill', 'white')
                .style('font-weight', '700')
                .style('font-size', '12px')
                .transition()
                .duration(1000)
                .attr('height', item / 12 * 177)
                .attr('y', 200 - item / 12 * 177 - 6)
            svg.append('text')
                .attr('x', (index + 1) * 40)
                .attr('y', 216)
                .text(`${week[index]}요일`)
                .style('fill', 'white')
                .style('font-weight', '700')
                .style('font-size', '12px')
        });

        svg.append('line')
            .attr('x1', 30)
            .attr('x2', 320)
            .attr('y1', 200)
            .attr('y2', 200)
            .attr('stroke-width', 2)
            .attr('stroke', '#ccc')
        svg.append('line')
            .attr('x1', 30)
            .attr('x2', 30)
            .attr('y1', 20)
            .attr('y2', 200)
            .attr('stroke-width', 2)
            .attr('stroke', '#ccc')
        hour.reverse().forEach((hour, index) => {
            svg.append('text')
                .attr('x', 0)
                .attr('y', (index + 1) * 28)
                .text(hour)
                .style('fill', 'white')
                .style('font-weight', '700')
                .style('font-size', '12px')
        });
        // eslint-disable-next-line
    }, [])

    return (
        <div ref={canvasRef}></div>
    );
};

export default Sleep;