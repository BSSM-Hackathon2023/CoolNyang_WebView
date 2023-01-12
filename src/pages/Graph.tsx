import * as d3 from 'd3';
import Color from '../components/Color';
import Sleep from '../components/Sleep';
import Temp from '../components/Temp';
import './Graph.scss';

const Graph = () => {
    return (
        <div className='graph-wrap'>
            <div className='welcome-graph-wrap'>
                <span className='welcome-text'>반가워요, {'user id'}!</span>
                <span className='welcome-user-text'>{'박우빈'}님의 수면 패턴</span>
            </div>
            <div className='week-sleep-wrap'>
                <span className='this-week-sleep'>이번 주의 수면량이에요</span>
                <span className='last-week-sleep'>저번 주보다 {4}시간 적게 수면했어요</span>
            </div>
            <div className='line' />
            <div className='week-sleep-graph'>
                <Sleep />
            </div>
            <div className='week-sleep-wrap'>
                <span className='this-week-sleep'>이번 주의 숙면 컬러에요</span>
                <span className='last-week-sleep'></span>
            </div>
            <div className='line' />
            <div className='week-color-graph'>
                <Color />
            </div>
            <div className='week-sleep-wrap'>
                <span className='this-week-sleep'>이번 주의 온습도에요</span>
                <span className='last-week-sleep'>노란 막대가 온도, 빨간 선이 습도를 나타내요</span>
            </div>
            <div className='line' />
            <div className='week-sleep-graph'>
                <Temp />
            </div>
        </div>
    );
};

export default Graph;