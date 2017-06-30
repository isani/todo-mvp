import draft, { draftActions, updateDraft } from './draft'

const nonExistentAction = 'FOOBAR'
const testText = 'foo'
const newText = 'bar'

describe('updateDraft', () => {
  it('should return an update action', () => {
    const actual = updateDraft()
    expect(actual.type).toEqual(draftActions.update)
  })
  it('should contain the update text', () => {
    const actual = updateDraft(newText)
    expect(actual.text).toEqual(newText)
  })
})

describe('draft', () => {
  it('should have an initial value of empty string', () => {
    const actual = draft()
    expect(actual).toEqual('')
  })
  it('should return current state for unknown actions', () => {
    const actual = draft(testText, { type: nonExistentAction, text: newText })
    expect(actual).toEqual(testText)
  })
  it('should update with new text', () => {
    const actual = draft(testText, {
      type: draftActions.update,
      text: newText
    })
    expect(actual).toEqual(newText)
  })
  it('should not update if new text is undefined', () => {
    const actual = draft(testText, { type: draftActions.update })
    expect(actual).toEqual(testText)
  })
  it('should update if new text is an empty string', () => {
    const actual = draft(testText, { type: draftActions.update, text: '' })
    expect(actual).toEqual('')
  })
})
