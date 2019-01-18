import { generateId } from './Storage'

const togglePinnedNote = (notes = [], id) => {
    return notes.map(note => {
        if (note.id === id) {
            return { ...note, pinned: !note.pinned }
        } else {
            return note
        }
    })
}

const createNote = text => {
    return {
        text,
        pinned: false,
        id: generateId(),
    }
}

const shortenNote = (text = '', limit = 80) => {
    if (text.length <= limit) {
        return text
    } else {
        return text.substr(0, limit) + '…'
    }
}

export { togglePinnedNote, createNote, shortenNote }
