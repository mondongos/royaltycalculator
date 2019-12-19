import React from 'react'

export default class Step2StreamingInfo extends React.Component {
    render() {
        if(this.props.currentStep != 2) {
            return null
        }
        return (
            <div>
                <input
                id="songName"
                name="songName"
                type="text"
                placeholder="Song Title"
                value={this.props.songName}
                onChange={this.props.handleChange}
                />
                <input
                id="artistName"
                name="artistName"
                type="text"
                placeholder="Artist"
                value={this.props.artistName}
                onChange={this.props.handleChange}
                />
                <input
                id="yearReleased"
                name="yearReleased"
                type="number"
                placeholder="Year released"
                value={this.props.yearReleased}
                onChange={this.props.handleChange}
                />
            </div>
        )
    }
}