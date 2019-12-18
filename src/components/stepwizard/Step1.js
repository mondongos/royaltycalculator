import React from 'react'

export default class Step1 extends React.Component {
    render() {
        if(this.props.currentStep != 1) {
            return null
        }
        return (
            <div>
                <input
                />
            </div>
        )
    }
}