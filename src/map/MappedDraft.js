import { connect } from 'react-redux'
import { updateDraft } from '../state/draft'
import { addTodo } from '../state/todos'
import Draft from '../view/Draft'

const mapStateToProps = state => {
  return {
    text: state.draft
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: text => {
      dispatch(updateDraft(text))
    },
    onSubmit: text => {
      dispatch(addTodo(text))
      dispatch(updateDraft(''))
    }
  }
}

const MappedDraft = connect(mapStateToProps, mapDispatchToProps)(Draft)

export default MappedDraft
