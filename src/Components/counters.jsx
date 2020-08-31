import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
       const {onReset ,counters, ondelete , onIncrement} = this.props
        return (<div>
            <button className='btn btn-primary mb-3'
                onClick={onReset}>Reset
                </button>
            {counters.map(counter => <Counter
                key={counter.id}
                onDelete={ondelete}
                onHandle = {onIncrement}
                counter = {counter}
            />)}
        </div>);
    }
}
 
export default Counters;