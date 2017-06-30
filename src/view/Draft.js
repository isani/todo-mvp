import React from 'react'
import PropTypes from 'prop-types'

const Draft = ({ text, onChange, onSubmit }) => {
  return (
    <div>
      <form
        onSubmit={event => {
          event && event.preventDefault()
          onSubmit(text)
        }}
      >
        <input
          type="text"
          onChange={event => onChange(event.target.value)}
          value={text}
        />
      </form>
    </div>
  )
}

Draft.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Draft
