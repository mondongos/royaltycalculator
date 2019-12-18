import React from 'react'
import Step1 from './stepwizard/Step1'

export default class StartWizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                        <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
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