import './NotesList.css'

import React from 'react'

import emptyIllustration from './empty.svg'
import Note from './Note'
import DeleteAllButton from './DeleteAllButton'

const NotesList = ({ notes, onDeleteNote, onPinNote, onDeleteAllNotes }) => (
    <main className="notes_list">
        {notes.length > 0 ? (
            notes.map(note => <Note key={note.id} note={note} onDeleteClick={onDeleteNote} onPinClick={onPinNote} />)
        ) : (
            <section className="empty_screen" data-testid="empty-illustration">
                <img src={emptyIllustration} alt="No notes yet" />
                No notes yet.
            </section>
        )}
        {notes.length >= 1 && <DeleteAllButton onClick={onDeleteAllNotes} />}
    </main>
)

export default NotesList
