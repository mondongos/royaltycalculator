import React from 'react'

export default class Step2StreamingInfo extends React.Component {
    render() {
        if(this.props.currentStep != 2) {
            return null
        }
        return (
            <div>
                <input
                id="year1"
                name="songName"
                type="text"
                placeholder="Song Title"
                value={this.props.songName}
                onChange={this.props.handleChange}
                />
                
            </div>
        )
    }
}