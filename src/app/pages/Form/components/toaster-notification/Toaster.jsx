import React from 'react';

// styling
import './Toaster.scss';

export class Toaster extends React.Component {
    static show(response) {
        Toaster.__singletonRef.__show(response);
    }

    static hide() {
        Toaster.__singletonRef.__hide();
    }

    constructor(props) {
        super(props)
        Toaster.__singletonRef = this;
        this.state = {
            status: null,
            message: '',
            display: 'none'
        }
        this.__hide = this.__hide.bind(this)
    }

    __show(response) {
        this.setState({
            status: response.status,
            message: response.msg,
            display: 'flex'
        })
    }

    __hide() {
        this.setState({
            status: null,
            message: '',
            display: 'none'
        })
    }
    render() {
        const notificationColor = this.state.status == 'success' ? '#6FF06B' : this.state.status == 'failed' ? '#F0776B' : '';
        return (
            <div className='tw-shadow-md' id="toaster-main-container" style={{ display: `${this.state.display}`, backgroundColor: notificationColor }}>
                {this.state.message}
                <button className="toaster-close-button-icon" onClick={this.__hide}>x</button>
            </div>
        )
    }
}