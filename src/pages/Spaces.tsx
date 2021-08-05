import React, { Component } from 'react'
import {SpaceComponent} from '../components/spaces/SpaceComponent'
import { Space } from '../models/space.model'
import { DataService } from '../services/DataService'
import {ConfirmModal} from '../components/spaces/ConfirmModal'

interface SpacesState {
    spaces: Space[],
    show: boolean,
    textContent: string
}

interface SpacesProps {
    dataService: DataService
}

export default class Spaces extends Component<SpacesProps, SpacesState> {

    constructor(props: SpacesProps) {
        super(props)
        this.state = {
            spaces: [],
            show: false,
            textContent: ''
        }
    }

    componentDidMount() {
        (
            async () => {
                const data = await this.props.dataService.getSpaces();
                if(data) {
                    this.setState({
                        spaces: data
                    })
                }
            }
        )()
    }

    private reserveSpace = async (spaceId: string) => {
        let res = await this.props.dataService.reserveSpace(spaceId);

        if(res) {
            this.setState({
                show: true,
                textContent: `You reserved the space with id ${spaceId} and got the reservation number ${res}`
            })
        } else {
            this.setState({
                show: true,
                textContent: `You can't reserve the space with id ${spaceId}`
            })
        }
    }

    private renderSpaces = () => {
        const rows: any[] = [];
        if(this.state.spaces.length > 0) {
            for (const space of this.state.spaces) {
                rows.push(<SpaceComponent key={space.location} spaceId={space.spaceId} name={space.name} location={space.location} reserveSpace={this.reserveSpace} />)
            }
        }
        return rows;
    }

    private closeModal = () => {
        this.setState({
            show: false,
            textContent: '',
        })
    }

    render() {
        return (
            <div className="grid grid-cols-3 lg:grid-col-4 py-8 sm:px-4 gap-x-8 gap-y-6">
                <h2 className="col-span-3 lg:col-span-1 text-gray-900 font-semibold">Welcome to the Spaces page!</h2>
                <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-8 sm:gap-x-6 lg:gap-x-8">
                    {this.renderSpaces()}
                </div>
                <ConfirmModal show={this.state.show} textContent={this.state.textContent} closeModal={this.closeModal} />
            </div>
        )
    }
}
