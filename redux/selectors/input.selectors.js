import _get from 'lodash/get'
import _keys from 'lodash/keys'

export const getAvailableSections = (state) => _keys(state.input)
  .reduce((acc, value) => ({ ...acc, value }), {})
export const getInputValue = ({ section, field }) => (state) => _get(state.input, [section, field])
