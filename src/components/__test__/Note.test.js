import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Note from '../Note'

afterEach(cleanup)

it('displays note text, delete and pin buttons', () => {
    const note = getNote()
    const { getByTestId } = render(<Note note={note} />)

    expect(getByTestId('note-content').textContent).toBe(note.text)
    expect(getByTestId('delete-note')).toBeDefined()
    expect(getByTestId('pin-note')).toBeDefined()
})

it('can delete note', () => {
    const note = getNote()
    const deleteSpy = jest.fn()
    const { getByTestId } = render(<Note note={note} onDeleteClick={deleteSpy} />)

    expect(getByTestId('delete-note')).toBeDefined()
    fireEvent.click(getByTestId('delete-note'))
    expect(deleteSpy).toHaveBeenCalledTimes(1)
    expect(deleteSpy).toHaveBeenCalledWith(note)
})

it('can pin note', () => {
    const note = getNote()
    const pinSpy = jest.fn()
    const { getByTestId } = render(<Note note={note} onPinClick={pinSpy} />)

    expect(getByTestId('pin-note')).toBeDefined()
    expect(getByTestId('pin-note').textContent).toBe('📌 – Pin note')

    fireEvent.click(getByTestId('pin-note'))
    expect(pinSpy).toHaveBeenCalledTimes(1)
    expect(pinSpy).toHaveBeenCalledWith(note)
})

it('can unpin note', () => {
    const note = { ...getNote(), pinned: true }
    const pinSpy = jest.fn()
    const { getByTestId } = render(<Note note={note} onPinClick={pinSpy} />)

    expect(getByTestId('pin-note')).toBeDefined()
    expect(getByTestId('pin-note').textContent).toBe('📌 – Unpin note')

    fireEvent.click(getByTestId('pin-note'))
    expect(pinSpy).toHaveBeenCalledTimes(1)
    expect(pinSpy).toHaveBeenCalledWith(note)
})

it('shortens note text and toggles full text', () => {
    const longText = 'This is a text with 81 chars - This is a text with 81 chars - Really believe meee'
    const truncatedText = 'This is a text with 81 chars - This is a text with 81 chars - Really believe mee…'
    const note = { text: longText, id: 1, pinned: false }
    const { getByTestId } = render(<Note note={note} />)

    expect(getByTestId('note-content').textContent).toBe(truncatedText + 'Expand note')
    expect(getByTestId('toggle-expanded')).toBeDefined()

    fireEvent.click(getByTestId('toggle-expanded'))
    expect(getByTestId('note-content').textContent).toBe(longText + 'Collapse note')
    expect(getByTestId('toggle-expanded')).toBeDefined()

    fireEvent.click(getByTestId('toggle-expanded'))
    expect(getByTestId('note-content').textContent).toBe(truncatedText + 'Expand note')
    expect(getByTestId('toggle-expanded')).toBeDefined()
})

// Helpers
const getNote = () => ({ text: 'Test Text', id: 1, pinned: false })
