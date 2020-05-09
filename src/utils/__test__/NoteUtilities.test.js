import { togglePinnedNote, createNote, shortenNote } from '../NoteUtilities'

describe('NoteUtilities', () => {
    describe('togglePinnedNote', () => {
        it('sets pinned to true when it was false', () => {

        })

        it('sets pinned to false when it was true', () => {

        })

        it('does nothing when id is not included', () => {

        })

        it('returns empty array for undefined notes', () => {

        })
    })

    describe('createNote', () => {
        it('creates a note with the given text', () => {

        })
    })

    describe('shortenNote', () => {
        it('does nothing when text is shorter than limit', () => {

        })

        it('does nothing when text is as long as limit', () => {

        })

        it('shortens text to limit and appends ellipsis char', () => {

        })

        it('returns empty string for undefined text', () => {

        })

        it('limits text to 80 chars when nothing else is given', () => {

        })
    })
})

// Helpers
const getNotes = () => [
    { text: 'Hello World', id: 'note-1', pinned: true },
    { text: 'Hello Hamburg', id: 'note-2', pinned: false },
    { text: 'This is a note', id: 'note-3', pinned: true },
    { text: 'This is text', id: 'note-4', pinned: false },
    { text: 'Test data is hard to make up', id: 'note-5', pinned: true },
]

const getNoteById = (notes, id) => notes.find(note => note.id === id)
