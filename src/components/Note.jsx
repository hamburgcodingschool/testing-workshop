import './Note.css'

import React from 'react'

import { shortenNote } from '../utils/NoteUtilities'

class Note extends React.Component {
    state = { expanded: false }

    _toggleExpanded = () => {
        this.setState(({ expanded }) => ({ expanded: !expanded }))
    }

    render() {
        const { note, onDeleteClick, onPinClick } = this.props
        const { expanded } = this.state
        const { text, pinned } = note

        return (
            <div className="note" data-testid={note.id}>
                <div className="note__container">
                    <p data-testid="note-content" className="note--text">
                        {expanded ? text : shortenNote(text, 80)}

                        {text.length > 80 && (
                            <button data-testid="toggle-expanded" onClick={this._toggleExpanded} className="text">
                                {expanded ? 'Collapse note' : 'Expand note'}
                            </button>
                        )}
                    </p>
                    <footer className="note__actions">
                        <button data-testid="pin-note" className="simple" onClick={() => onPinClick(note)}>
                            {pinned ? '📌 – Unpin note' : '📌 – Pin note'}
                        </button>
                        <button data-testid="delete-note" className="simple danger" onClick={() => onDeleteClick(note)}>
                            🗑 – Delete Note
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Note
