import './App.css'

import React, { Component } from 'react'

import SearchHeader from './components/SearchHeader'
import NotesList from './components/NotesList'
import NoteComposer from './components/NoteComposer'

import { getSavedNotes, saveNotes, deleteAllNotes } from './utils/Storage'
import { togglePinnedNote, createNote } from './utils/NoteUtilities'
import { filterPinnedNotes, removeNoteById, filterByText } from './utils/Filter'

class App extends Component {
    _getInitialState = () => {
        return {
            showOnlyPinned: false,
            searchValue: '',
            notes: getSavedNotes([]),
            filteredNotes: getSavedNotes([]),
        }
    }

    state = this._getInitialState()

    _resetSearch = () => {
        this.setState(({ notes }) => ({ searchValue: '', filteredNotes: notes }))
    }

    _handleSearchValueChange = event => {
        const searchValue = event.target.value
        this.setState(({ notes }) => ({
            searchValue,
            filteredNotes: filterByText(notes, searchValue),
        }))
    }

    _handlePinnedChange = event => {
        const showOnlyPinned = event.target.checked
        this.setState(({ notes }) => ({
            showOnlyPinned,
            filteredNotes: showOnlyPinned ? filterPinnedNotes(notes) : notes,
        }))
    }

    _handleCreateNote = noteText => {
        this.setState(state => {
            const { notes } = state
            notes.push(createNote(noteText))
            saveNotes(notes)
            return { notes }
        }, this._resetSearch)
    }

    _handleDeleteNote = note => {
        this.setState(state => {
            const notes = removeNoteById(state.notes, note.id)
            saveNotes(notes)
            return { notes }
        }, this._resetSearch)
    }

    _handlePinNote = note => {
        this.setState(state => {
            const notes = togglePinnedNote(state.notes, note.id)
            const filteredNotes = filterByText(notes, state.searchValue)
            saveNotes(notes)
            return { notes, filteredNotes }
        })
    }

    _handleDeleteAllNotes = () => {
        deleteAllNotes()
        this.setState(() => this._getInitialState())
    }

    render() {
        const { searchValue, filteredNotes, showOnlyPinned } = this.state
        return (
            <div className="app">
                <SearchHeader
                    searchValue={searchValue}
                    onSearchValueChange={this._handleSearchValueChange}
                    pinnedChecked={showOnlyPinned}
                    onPinnedChange={this._handlePinnedChange}
                />
                <NotesList
                    notes={filteredNotes}
                    onDeleteNote={this._handleDeleteNote}
                    onPinNote={this._handlePinNote}
                    onDeleteAllNotes={this._handleDeleteAllNotes}
                />
                <NoteComposer onCreateNote={this._handleCreateNote} />
            </div>
        )
    }
}

export default App
