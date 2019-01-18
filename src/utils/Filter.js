const filterPinnedNotes = (notes = []) => {
    return notes.filter(note => note.pinned)
}

const removeNoteById = (notes = [], id) => {
    return notes.filter(note => note.id !== id)
}

const filterByText = (notes = [], text) => {
    return notes.filter(note => note.text.includes(text))
}

export { filterPinnedNotes, removeNoteById, filterByText }
