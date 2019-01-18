import { togglePinnedNote, createNote, shortenNote } from '../NoteUtilities'

describe('NoteUtilities', () => {
    describe('togglePinnedNote', () => {
        it('sets pinned to true when it was false', () => {
            const notes = getNotes()
            expect(getNoteById(notes, 'note-2').pinned).toBe(false)

            const toggledNotes = togglePinnedNote(getNotes(), 'note-2')
            expect(getNoteById(toggledNotes, 'note-2').pinned).toBe(true)
        })

        it('sets pinned to false when it was true', () => {
            const notes = getNotes()
            expect(getNoteById(notes, 'note-1').pinned).toBe(true)

            const toggledNotes = togglePinnedNote(getNotes(), 'note-1')
            expect(getNoteById(toggledNotes, 'note-1').pinned).toBe(false)
        })

        it('does nothing when id is not included', () => {
            const notes = getNotes()

            const toggledNotes = togglePinnedNote(getNotes(), 'note-missing')
            expect(toggledNotes).toEqual(notes)
        })

        it('returns empty array for undefined notes', () => {
            const toggledNotes = togglePinnedNote()
            expect(toggledNotes).toEqual([])
        })
    })

    describe('createNote', () => {
        it('creates a note with the given text', () => {
            const note = createNote('Test Note')
            expect(note).toMatchObject({
                text: 'Test Note',
                pinned: false,
            })
            expect(note.id.length).toBe(36)
        })
    })

    describe('shortenNote', () => {
        it('does nothing when text is shorter than limit', () => {
            const shortenedNote = shortenNote('7 chars', 10)
            expect(shortenedNote).toBe('7 chars')
        })

        it('does nothing when text is as long as limit', () => {
            const shortenedNote = shortenNote('7 chars', 7)
            expect(shortenedNote).toBe('7 chars')
        })

        it('shortens text to limit and appends ellipsis char', () => {
            const shortenedNote = shortenNote('Hello Test', 5)
            expect(shortenedNote).toBe('Hello…')
        })

        it('returns empty string for undefined text', () => {
            const shortenedNote = shortenNote()
            expect(shortenedNote).toBe('')
        })

        it('limits text to 80 chars when nothing else is given', () => {
            const shortenedNote = shortenNote(
                'This is a text with 81 chars - This is a text with 81 chars - Really believe meee'
            )
            expect(shortenedNote).toBe(
                'This is a text with 81 chars - This is a text with 81 chars - Really believe mee…'
            )
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
