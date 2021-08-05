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
            return <img src={this.props.photoUrl} alt={this.props.spaceId} className=" object-cover rounded-t-lg" />
        } else {
            return <img src={genericImg} alt="generic image" className="object-cover rounded-t-lg" />
        }
    }

    render() {
        return (
            <figure className="group rounded-lg hover:bg-gray-50 bg-white shadow-sm ring-1 ring-black ring-opacity-5">
                    {this.renderPhoto()}
            <figcaption className="py-3 px-4 flex items-center justify-between">
                <div>
                    <p className="text-indigo-600 font-medium group-hover:text-gray-900">{this.props.name}</p>
                    <p className="text-indigo-500 group-hover:text-gray-500">{this.props.location}</p>
                    <p className="text-indigo-500 group-hover:text-gray-500">{this.props.spaceId}</p>
                </div>
                <div>
                     <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-semibold" onClick={() => this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
                </div>
            </figcaption>
            </figure>
        )
    }
}
