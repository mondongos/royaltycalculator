import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StartWizard from '../components/StartWizard'

describe('Start Wizard', () => {

    beforeEach(() => {
        
    })

    test('Initialises', () => {
        let wizard = new StartWizard()
        expect(wizard.state.currentStep).toEqual(1)
    })

    describe('Step functions', () => {

        test('Next step increases currentStep state by 1', () => {
            let wizard = new StartWizard()
            wizard.nextStep()
            expect(wizard.state.currentStep).toEqual(2)
        })

    })
})