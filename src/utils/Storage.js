const NOTES_KEY = 'notes'

const saveNotes = notes => {
    try {
        localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
    } catch (error) {
        console.error('Could not save notes:', error)
    }
}

const getSavedNotes = defaultValue => {
    try {
        const notesData = localStorage.getItem(NOTES_KEY)
        return notesData ? JSON.parse(notesData) : defaultValue
    } catch (error) {
        console.error('Could not get saved notes:', error)
        return defaultValue
    }
}

const deleteAllNotes = () => {
    try {
        localStorage.removeItem(NOTES_KEY)
    } catch (error) {
        console.error('Could not delete all notes:', error)
    }
}

// https://stackoverflow.com/a/2117523 🙃
const generateId = () => {
    return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, c => {
        const r = (Math.random() * 16) | 0
        // eslint-disable-next-line no-mixed-operators
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

export { NOTES_KEY, saveNotes, getSavedNotes, deleteAllNotes, generateId }
