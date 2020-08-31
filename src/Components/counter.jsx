import React, {
    Component
} from 'react';

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     imgUrl: './images/default.jpg',
    //     names:['kate']
    // };
    styles = {
        fontWeight: 'bold',
        fontSize:10
    }
    render() {
        return (<div className='container'>

            <span style={this.styles}
                className={this.getBadgeClasses()}>{this.formatCount()}
            </span>
            <button
                onClick={() => this.props.onHandle(this.props.counter)}
                style={{ fontWeight: 17 }}
                className="btn btn-success">MyButton</button >
            <button
                onClick={()=>this.props.onDelete(this.props.counter.id)}
                className='btn btn-danger ml-2 mt-2 mb-2 ml-2'>Delete</button>

            </div> );
    }
    // amClicked = (product) => {
    //     console.log(product)
    //     this.setState({count:this.state.count+1})
    //     console.log('am clicked', this)
    // }
    // renderNames() {
    //     const {names} = this.state
    //     // if (names.length === 0) return <h1>No names</h1>
    //     // else {
    //     //     return names.map(name => <li key={name}>{name}</li>)
    //     // }
    //     return names.length === 0 ? <h1>No names</h1> : names.map(name => <li key={name}>{name}</li>)
    // }
    getBadgeClasses() {
        let classes = 'badge m-2 mt-2 mb-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter
        return value ===0? <h3>HelloWorld</h3> : value
    }

    }

    export default Counter;