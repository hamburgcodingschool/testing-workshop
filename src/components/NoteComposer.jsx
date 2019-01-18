import './NoteComposer.css'

import React from 'react'

class NoteComposer extends React.Component {
    state = {
        composerValue: '',
    }

    _handleSubmit = event => {
        event.preventDefault()
        this.props.onCreateNote(this.state.composerValue)
        this.setState(() => ({ composerValue: '' }))
    }

    _handleComposerValueChange = event => {
        const composerValue = event.target.value
        this.setState(() => ({ composerValue }))
    }

    render() {
        return (
            <form className="note_composer" onSubmit={this._handleSubmit}>
                <input
                    data-testid="composer-input"
                    value={this.state.composerValue}
                    onChange={this._handleComposerValueChange}
                    placeholder="Write a new note"
                    autoFocus
                />
                <button className="primary" data-testid="submit-button" type="submit" onClick={this._handleSubmit}>
                    Add Note
                </button>
            </form>
        )
    }
}

export default NoteComposer
