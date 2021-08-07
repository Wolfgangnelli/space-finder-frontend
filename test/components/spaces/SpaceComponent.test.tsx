import ReactDOM from 'react-dom';
import {SpaceComponent} from '../../../src/components/spaces/SpaceComponent'


describe('Space Component test suite', () => {

    let container: HTMLDivElement;
    
    const spaceId: string = 'someId';
    const name: string = 'someName';
    const location: string = 'someLocation';
    const reserveSpaceMock = jest.fn();
    
    describe('test with photo URL', () => {
        const photoUrl: string = 'someUrl';
        
        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(
                <SpaceComponent spaceId={spaceId} name={name} location={location} photoUrl={photoUrl} reserveSpace={reserveSpaceMock} />,
                container
            )
        })

        afterEach(() => {
            document.body.removeChild(container);
            container.remove();
            jest.clearAllMocks();
        })
    
        test('Renders correctly initial document', () => {
        
        })
        


    })

    
    describe('test without photo URL', () => {
           
        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(
                <SpaceComponent spaceId={spaceId} name={name} location={location} reserveSpace={reserveSpaceMock} />,
                container
            )
        })

        afterEach(() => {
            document.body.removeChild(container);
            container.remove();
            jest.clearAllMocks();
        })

        test('Renders correctly initial document', () => {
        
        })

    })
    
    


  


})
