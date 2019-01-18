import './DeleteAllButton.css'

import React from 'react'

class DeleteAllButton extends React.Component {
    state = {
        showConfirmation: false,
    }

    _showConfirmation = () => {
        this.setState(() => ({ showConfirmation: true }))
    }

    _hideConfirmation = () => {
        this.setState(() => ({ showConfirmation: false }))
    }

    _handleConfirmationClick = event => {
        this._hideConfirmation()
        this.props.onClick(event)
    }

    render() {
        if (this.state.showConfirmation) {
            return (
                <div className="delete_all__confirmation">
                    <button
                        data-testid="confirm-deletion"
                        className="delete_all__confirmation--delete danger"
                        onClick={this._handleConfirmationClick}>
                        Are you sure? This cannot be undone.
                    </button>
                    <button
                        data-testid="cancel-deletion"
                        className="delete_all__confirmation--cancel primary"
                        onClick={this._hideConfirmation}>
                        Cancel
                    </button>
                </div>
            )
        } else {
            return (
                <button data-testid="delete-all" className="delete_all simple danger" onClick={this._showConfirmation}>
                    Delete All Notes
                </button>
            )
        }
    }
}

export default DeleteAllButton
