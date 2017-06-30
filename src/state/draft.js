// Action constants

const draftActions = {
  update: 'UPDATE_DRAFT'
}

// Action builders

const updateDraft = (text = '') => {
  return {
    type: draftActions.update,
    text: text
  }
}

// Reducer

const initialDraft = ''

const draft = (draftText = initialDraft, action = {}) => {
  switch (action.type) {
    case draftActions.update:
      if (action.text === undefined) {
        return draftText
      } else {
        return action.text
      }

    default:
      return draftText
  }
}

// Exports

export default draft
export { draftActions, updateDraft }
