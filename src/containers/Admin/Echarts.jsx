import React from 'react';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';

/* immutable */
import { Map, List, Stack, is, fromJS, isIndexed, Seq, isImmutable, isCollection } from 'immutable';

/* action */
import { layoutLoading, layoutMask } from '../../redux/Actions/Admin';

class Echarts extends React.Component {
    constructor(props) {
        super(props);
        
        // func.
        this.getOtion = this.getOtion.bind(this);
    }
    
    componentDidMount() {
        // console.log('cProps:', this.props);
        const { dispatch, Config } = this.props;
        setTimeout(
            () => {
                dispatch(layoutLoading(false));
                dispatch(layoutMask(false));
            }
            , Config.loading.time
        );



        /****** immutable-Map、is ******/

        /* 实例1 */
        // const map1 = Map({ a: 1, b: 1, c: 1 });
        // const map2 = Map({ a: 1, b: 1, c: 1 });
        // console.log(map1, map2);
        // console.log(map1 !== map2); // ture
        // console.log(Object.is(map1, map2) === false); // true
        // console.log(is(map1, map2) === true); // true
        // console.log(is(map1, map2)); // true

        /* 实例2 */
        // const map1 = {
        //     list: [
        //         {id: 1, title: '哈哈'},
        //         {id: 2, titile: '不错'}
        //     ]
        // };
        //
        // const map2 = Map({
        //     list: [
        //         {id: 1, title: '哈哈'},
        //         {id: 2, titile: '不错'}
        //     ]
        // });
        //
        // const map3 = Map({
        //     list: [
        //         {id: 1, title: '哈哈'},
        //         {id: 2, titile: '不错'}
        //     ]
        // });
        //
        // console.log(is(map1, map2)); // false
        // console.log(is(map2, map3)); // false

        /* 实例3 */
        // const map1 = Map({ a: 1, b: 2, c: 3 });
        // const map2 = map1.set('b', 50);
        // console.log(map1.get('b')); // 2
        // console.log(map2.get('b')); // 50

        /* 实例4 */
        // const map1 = Map({a: 1, b: 2, c: 3, list: [{id: 1, title: '你好'}, {id: 2, title: '你好!'}]});
        // const map2 = map1.set('b', 2);
        // console.log(map1, map2);
        // console.log(map1.equals(map2) === true);
        // const map3 = map1.set('b', 50);
        // console.log(map3);
        // console.log(map1.equals(map3) === false);

        /* 实例5 */
        // const map1 = Map({ a: 1, b: 2, c: 3, list: [{id: 1, title: '你好'}, {id: 2, title: '你好!'}] });
        // console.log(map1);
        //
        // const map2 = map1.map((v, k) => {
        //     console.log(k, v);
        //     if (k == 'list') {
        //         return 'haha';
        //     }
        //
        //     return v;
        // });
        // console.log(map3);
        //
        // const map3 = map2.map((v, k) => {
        //     console.log(k, v);
        //     return v + 1;
        // });
        //
        // map3.map((v, k) => {
        //     console.log(k, v);
        // });
        // console.log(map3);

        /* 实例6 */
        // const map1 = Map({ a: 1, b: 2, c: 3, d: 4 });
        // const map2 = Map({ c: 10, a: 20, t: 30 });
        // const obj = { d: 100, o: 200, g: 300 };
        // const map3 = map1.merge(map2, obj);
        // console.log(map3); // Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }



        /****** immutable-fromJS ******/

        /* 实例1 */
        // const map1 = fromJS({
        //     list: [
        //         {id: 1, title: '哈哈'},
        //         {id: 2, titile: '不错'}
        //     ]
        // });
        //
        // const map2 = fromJS({
        //     list: [
        //         {id: 1, title: '哈哈'},
        //         {id: 2, titile: '不错'}
        //     ]
        // });
        //
        // const map3 = fromJS({
        //     list: [
        //         {id: 1, title: '哈哈'},
        //         {id: 2, titile: '不错1'}
        //     ]
        // });
        //
        // console.log(map1, map2);
        // console.log(is(map1, map2)); // true
        // console.log(is(map1, map3)); // false



        /****** immutable-Seq ******/
        /* 实例1 */
        // const square = Seq({ x: 0, y: 1, z: 2 }).map(v => v * 2);
        // console.log('isSeq:', Seq.isSeq(square));
        // console.log(square);
        // console.log(square.get('z'));        // 4
        // console.log(square.has('z'));        // true
        // console.log(square.toObject());      // Object {x: 0, y: 2, z: 4}
        // 
        // const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
        //     .filter(x => x % 2 !== 0)
        //     .map(x => x * x);
        // console.log(oddSquares.toObject());  // Object {0: 1, 1: 9, 2: 25, 3: 49}



        /****** immutable-isImmutable-v4.0rc ******/
        /* 实例1 */
        // isImmutable([]);                   // false
        // isImmutable({});                   // false
        // isImmutable(Map());                // true
        // isImmutable(List());               // true
        // isImmutable(Stack());              // true
        // isImmutable(Map().asMutable());    // false



        /****** immutable-isCollection: v4.0.0-rc.2 ******/
        /* 实例1 */
        // isCollection([]);        // false
        // isCollection({});        // false
        // isCollection(Map());     // true
        // isCollection(List());    // true
        // isCollection(Stack());   // true
    }

    getOtion() {
        return {
            backgroundColor: '#faf6f3',
            animation: false,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                }
            },
            grid: {
                top: 60,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#cfc3bd'
                    }
                },
            },
            yAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                    }
                },
                axisLabel: {
                    show: true,
                    rotate: 0,
                    textStyle: {
                        color: '#682d19'
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#cfc3bd'
                    }
                },
                data: ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
            },
            series: [
                {
                    name: '月开支',
                    type: 'bar',
                    barGap: '-100%',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#682d19'
                            },
                            position: 'left',
                            show: false,
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#1FBCD2',
                        }
                    },
                    data: [1900, 1029, 1602, 2004, 1100, 1800, 2800, 1407, 2200, 900]
                },
                {
                    type: 'line',
                    silent: true,
                    barGap: '-100%',
                    data: [100, 1000, 800, 1070, 900, 300, 1200, 900, 1200, 200],
                    itemStyle: {
                        normal: {
                            color: '#FEDC6E',

                        }
                    },

                }
            ]
        };
    }
    
    render() {        
        return (
            <ReactEcharts 
                option={this.getOtion()} 
                lazyUpdate={true}
                style={{height: '500px', width: '100%'}}  
                className='react_for_echarts' />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(Echarts);
