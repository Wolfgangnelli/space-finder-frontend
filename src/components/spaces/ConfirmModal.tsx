import React, { Component } from 'react'

interface ConfirmModalProps {
    show: boolean,
    textContent: string,
    closeModal: () => void
}

export class ConfirmModal extends Component<ConfirmModalProps> {
    render() {
        if(this.props.show) {
            return (
                <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 px-6 text-left">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">You tried to reserve and ...</p>
                                <div className="modal-close cursor-pointer z-50" onClick={() => this.props.closeModal()}>
                                    <i className="fas fa-times"></i>
                                </div>
                            </div>
                            <p>{this.props.textContent}</p>
                            <div className="flex justify-end pt-2">
                                <button onClick={() => this.props.closeModal()} className="modal-close px-4 py-3 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
