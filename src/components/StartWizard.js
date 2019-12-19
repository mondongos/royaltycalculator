import React from 'react'
import Step1SongInfo from './stepwizard/Step1'
import Step2StreamingInfo from './stepwizard/Step2'

export default class StartWizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songName: '',
            artistName: '',
            yearReleased: null,
            currentStep: 1,
            playsPerYear: [],
            discountRate: 0
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onComplete(this.state);
    }

    nextStep = () => {
        let currentStep = this.state.currentStep
        if (this.state.currentStep >= 3) {
            this.setState({
                currentStep: 4
            })
        } else {
            this.setState({
                currentStep: currentStep + 1
            })
        }
        console.log(this.state)

    }

    previousStep = () => {
        let currentStep = this.state.currentStep
        if (this.state.currentStep <= 1) {
            this.setState({
                currentStep: 1
            }) 
        } else {
            this.setState({
                currentStep: currentStep - 1
            })
        }
        console.log(this.state)
    }

    previousButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep !== 1) {
            return (
                <button
                variant="outline-secondary"
                onClick={this.previousStep}>
                    Back
                </button>
            )
        } else {
            return null
        }
    }

    nextButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep < 5) {
            return (
                <button
                variant="primary"
                onClick={this.nextStep}>
                    Next
                </button>
            )
        } else {
            return null
        }
    }

    submitButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep === 4) {
            return (
                <button
                >
                    Submit
                </button>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Step1SongInfo
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        songName={this.state.songName}
                        artistName={this.state.artistName}
                        yearReleased={this.state.yearReleased}
                        />
                        <Step2StreamingInfo
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        yearReleased={this.state.yearReleased}
                        />

                        {this.previousButton()}
                        {this.nextButton()}
                        {this.submitButton()}
                    </form>

                </div>
            </React.Fragment>
        )
    }
}