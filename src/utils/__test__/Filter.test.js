import { filterPinnedNotes, removeNoteById, filterByText } from '../Filter'

describe('Filter', () => {
    describe('filterPinnedNotes', () => {
        it('returns all pinned notes', () => {
            const filteredNotes = filterPinnedNotes(getNotes())

            expect(filteredNotes.length).toBe(3)
        })

        it('returns empty array for undefined notes', () => {
            const filteredNotes = filterPinnedNotes()

            expect(filteredNotes).toEqual([])
        })

        it('does not mutate input notes', () => {
            const notes = getNotes()
            expect(notes.length).toBe(5)

            const filteredNotes = filterPinnedNotes(notes)
            expect(filteredNotes.length).toBe(3)
            expect(notes.length).toBe(5)
        })
    })

    describe('removeNoteById', () => {
        it('removes note by id', () => {
            const notes = removeNoteById(getNotes(), 'note-3')
            expect(notes.length).toBe(4)

            const includesNote3 = notes.some(note => note.id === 'note-3')
            expect(includesNote3).toBe(false)
        })

        it('returns empty array for undefined notes', () => {
            const filteredNotes = removeNoteById()

            expect(filteredNotes).toEqual([])
        })

        it('does not mutate input notes', () => {
            const notes = getNotes()
            expect(notes.length).toBe(5)

            const removedNotes = removeNoteById(notes, 'note-3')
            expect(removedNotes.length).toBe(4)
            expect(notes.length).toBe(5)
        })
    })

    describe('filterByText', () => {
        it('filters note by text', () => {
            const notes = filterByText(getNotes(), 'Hello')
            expect(notes.length).toBe(2)
        })

        it('returns empty array for undefined notes', () => {
            const filteredNotes = filterByText()

            expect(filteredNotes).toEqual([])
        })

        it('does not mutate input notes', () => {
            const notes = getNotes()
            expect(notes.length).toBe(5)

            const filteredNotes = filterByText(getNotes(), 'Hello')
            expect(filteredNotes.length).toBe(2)
            expect(notes.length).toBe(5)
        })

        it.skip('matches text case insensitive', () => {
            const notes = filterByText(getNotes(), 'hello')
            expect(notes.length).toBe(2)
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
