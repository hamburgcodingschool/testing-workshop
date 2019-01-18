import { NOTES_KEY, saveNotes, getSavedNotes, deleteAllNotes, generateId } from '../Storage'

describe('Storage', () => {
    afterEach(() => localStorage.clear())

    describe('saveNotes', () => {
        it('saves stringified notes to localStorage', () => {
            const notes = [{ id: 1, text: 'test', pinned: false }]
            saveNotes(notes)
            expect(localStorage.getItem(NOTES_KEY)).toEqual(JSON.stringify(notes))
        })
    })

    describe('getSavedNotes', () => {
        it('gets savedNotes from localStorage and parses them', () => {
            const notes = [{ id: 1, text: 'test', pinned: false }]
            saveNotes(notes)

            const retrievedNotes = getSavedNotes()
            expect(retrievedNotes).toEqual(notes)
        })

        it('when no notes have been saved returns default value', () => {
            const retrievedNotes = getSavedNotes([])
            expect(retrievedNotes).toEqual([])
        })
    })

    describe('deleteAllNotes', () => {
        it('deletes all saved notes', () => {
            const notes = [{ id: 1, text: 'test', pinned: false }]
            saveNotes(notes)
            expect(localStorage.getItem(NOTES_KEY)).toEqual(JSON.stringify(notes))

            deleteAllNotes()
            expect(localStorage.getItem(NOTES_KEY)).toBeNull()
        })
    })

    describe('generateId', () => {
        it('generates a guid', () => {
            const id = generateId()
            expect(id).toMatch(/[\d|\w|-]{36}/)
        })
    })
})
