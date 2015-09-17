Checkbox = React.createClass
  render: ->
    <div>
      <label htmlFor={@props.slug}>
        <input type="checkbox" id={@props.slug} onClick={@props.changeEvent} value={@props.index} checked={@props.checked}/>
        {@props.names}
      </label>
    </div>

module.exports = Checkbox
