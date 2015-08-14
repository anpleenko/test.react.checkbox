React = require('react')
# second = require('./second')
# <li>{@props.name}<a href={@props.url}>{@props.url}</a></li>

Checkbox = React.createClass
  # handleClickChackbox: (e) ->
  #   console.log e.target.id
  #   <second id={e.target.id}></second>

  render: ->
    <div>
      <label htmlFor={@props.slug}>
        <input type="checkbox" id={@props.slug} onClick={@props.changeEvent} value={@props.index} checked={@props.checked}/>
        {@props.names}
      </label>
    </div>

module.exports = Checkbox

