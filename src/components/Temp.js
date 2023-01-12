import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Temp = () => {
    const data = [10.2, 6.3, 5.8, 2.5, 8.7, 7.5, 9.8];
    const humData = [52, 45, 43, 37, 64, 61, 54];
    const temp = ['14°', '16°', '18°', '20°', '22°', '24°', '26°'];
    const hum = ['20%', '30%', '40%', '50%', '60%', '70%', '80%']
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const xFunc = (_, index) => (index + 1) * 40 + 16;
        const yFunc = data => (70 - data) * 5;
        const drawLineChartGenerator = d3.line().x(xFunc).y(yFunc).curve(d3.curveBasis);

        const svg = canvas
            .append('svg')
            .attr('width', 350)
            .attr('height', 220)

        data.forEach((item, index) => {
            svg.append('rect')
                .attr('x', (index + 1) * 40)
                .attr('y', 200)
                .attr('width', 25)
                .attr('height', 0)
                .attr('fill', 'orange')
                .transition()
                .delay(3000)
                .duration(2000)
                .attr('height', item / 12 * 177)
                .attr('y', 200 - item / 12 * 177)
            svg.append('text')
                .attr('x', (index + 1) * 40 - 2)
                .attr('y', 216)
                .text(`${week[index]}요일`)
                .style('fill', 'white')
                .style('font-weight', '700')
                .style('font-size', '11px')
        }, []);

        svg.append('line')
            .attr('x1', 30)
            .attr('x2', 314)
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
        svg.append('line')
            .attr('x1', 314)
            .attr('x2', 314)
            .attr('y1', 20)
            .attr('y2', 200)
            .attr('stroke-width', 2)
            .attr('stroke', '#ccc')
        temp.reverse().forEach((temp, index) => {
            svg.append('text')
                .attr('x', 0)
                .attr('y', (index + 1) * 28)
                .text(temp)
                .style('fill', 'white')
                .style('font-weight', '700')
                .style('font-size', '12px')
        });
        hum.reverse().forEach((temp, index) => {
            svg.append('text')
                .attr('x', 320)
                .attr('y', (index + 1) * 28)
                .text(temp)
                .style('fill', 'white')
                .style('font-weight', '700')
                .style('font-size', '12px')
        });

        const path = svg.append('path')
            .attr('d', drawLineChartGenerator(humData))
            .attr('fill', 'none')
            .attr('stroke', 'red')
            .attr('stroke-width', 5)
            .attr('stroke-linecap', 'round')

        const length = path.node().getTotalLength();

        path
            .attr('stroke-dashoffset', length)
            .attr('stroke-dasharray', length)
            .transition()
            .delay(3000)
            .ease(d3.easeSin)
            .duration(2000)
            .attr('stroke-dashoffset', 2);
        // eslint-disable-next-line
    }, [])

    return (
        <div ref={canvasRef}></div>
    );
};

export default Temp;