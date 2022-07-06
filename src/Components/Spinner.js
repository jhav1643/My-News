import React, { Component } from 'react'
import Spin from './ajax-loader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className='my-3' src={Spin} alt="h" />
            </div>
        )
    }
}

export default Spinner