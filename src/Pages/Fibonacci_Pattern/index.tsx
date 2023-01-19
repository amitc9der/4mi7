import React from 'react'
import './Styles/index.css';
function goldenRatio() {
    return (1 + Math.sqrt(5)) / 2;
}

function fibonacci(n:number):number{
    if (n <= 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
type FibonacciDivPropsType = {
    maxSize: number;
    minSize: number;
};
const FibonacciDiv=(props:FibonacciDivPropsType)=>{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    const size = fibonacci(props.minSize);
    return <>
                <div style={{
                    'backgroundColor':color,
                    'width':size,
                    'height':size,
                    'zIndex':fibonacci(props.maxSize)-fibonacci(props.minSize+1),
                    // 'left':fibonacci(props.maxSize-1)-fibonacci(props.maxSize-2),
                    // 'right':fibonacci(props.maxSize-1)-fibonacci(props.maxSize-2),
                    }}
                    className="FibonacciDiv" 
                >
                        {props.maxSize>props.minSize?<FibonacciDiv maxSize={props.maxSize} minSize={props.minSize+1} />:<></>}
                </div>
            </>;
}


export default function FibonacciPattern() {
  let n:number=10;
  let i=15;
  return (
    <div className='FibonacciPattern'>
        
        {/* {patternDiv.map((item)=>{
            return item;
        })} */}
        <FibonacciDiv maxSize={i} minSize={n}/>
    </div>
  )
}
