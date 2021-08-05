import React, { Component } from 'react'
import genericImg from '../../assets/images/denmark_seaView.jpg';

interface SpaceComponentProps {
    spaceId: string,
    name: string,
    location: string,
    photoUrl?: string,
    reserveSpace: (spaceId: string) => void
}


export class SpaceComponent extends Component<SpaceComponentProps> {

    private renderPhoto = () => {
        if(this.props.photoUrl) {
            return <img src={this.props.photoUrl} alt={this.props.spaceId} className="absolute inset-0 w-full h-full" />
        } else {
            return <img src={genericImg} alt="generic image" className="absolute inset-0 w-full h-full" />
        }
    }

    render() {
        return (
            <figure className="group rounded-lg hover:bg-white shadow-sm ring-1 ring-black ring-opacity-5">
            <div className="realative bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
                    {this.renderPhoto()}
                </div>
            </div>
            <figcaption className="py-3 px-4">
                <p className="text-indigo-600 group-hover:text-gray-900">{this.props.name}</p>
                <p className="text-indigo-500 group-hover:text-gray-500">{this.props.spaceId}</p>
                <p className="text-indigo-500 group-hover:text-gray-500">{this.props.location}</p>
                <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>Reverve</button>
            </figcaption>
            </figure>
        )
    }
}
