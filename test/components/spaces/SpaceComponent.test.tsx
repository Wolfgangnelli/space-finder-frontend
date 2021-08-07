import ReactDOM from 'react-dom';
import {SpaceComponent} from '../../../src/components/spaces/SpaceComponent'
import {fireEvent} from '@testing-library/react'
import React from 'react';


describe('Space Component test suite', () => {

    let container: HTMLDivElement;
    
    const spaceId: string = 'someId';
    const name: string = 'someName';
    const location: string = 'someLocation';
    const reserveSpaceMock = jest.fn();
    const baseUrl = "http://localhost";

    function cleanUpTest() {
        document.body.removeChild(container);
        container.remove();
        jest.clearAllMocks();
    }

    function setUpTest(element: React.FunctionComponentElement<any>) {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            element,
            container
        )
    }

    
    describe('test with photo URL', () => {
        const photoUrl: string = 'some.url';
        
        beforeEach(() => {
            setUpTest(<SpaceComponent spaceId={spaceId} name={name} location={location} photoUrl={photoUrl} reserveSpace={reserveSpaceMock} />);          
        })

        afterEach(() => {
            cleanUpTest();
        })
    
        test('show image correctly', () => {
            const img = container.querySelector('img');
            expect(img!).toBeInTheDocument();
            expect(img!.src).toBe(`${baseUrl}/some.url`);
        })

        test('show labels correctly', () => {
            const labels = container.querySelectorAll('p');
            expect(labels[0].textContent).toBe('someName');
            expect(labels[1]).toHaveTextContent('someLocation');
            expect(labels[2]).toHaveTextContent('someId');
        })

        test('reserve spaces button', () => {
            const btn = container.querySelector('button');
            expect(btn).toBeInTheDocument();
            expect(btn).toHaveTextContent('Reserve');

            fireEvent.click(btn!);
            expect(reserveSpaceMock).toBeCalledWith(spaceId);
        })
        

    })

    
    describe('test without photo URL', () => {
           
        beforeEach(() => {
            setUpTest(<SpaceComponent spaceId={spaceId} name={name} location={location} reserveSpace={reserveSpaceMock} />);
        })

        afterEach(() => {
           cleanUpTest();
        })

        test('show image correctly', () => {
            const img = container.querySelector('img');
            expect(img!).toBeInTheDocument();
            expect(img!.src).toBeFalsy();
        })

    })
    
    


})
