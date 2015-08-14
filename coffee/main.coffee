# $ = require('jquery')
React  = require('react')
checkbox  = require('./first')
_      = require('underscore')

SearchExample = React.createClass
  getInitialState: ->
    leftNames: _.sortBy( @props.items, 'name' )
    rightNames: []

  generateSlugLeft: (text) ->
    "item-name-left#{text}"

  generateSlugRight: (text) ->
    "item-name-right#{text}"

  changeEventLeft: (e) ->
    # delete element
    nameIndex = parseInt(e.target.value, 10)
    addRight = @state.leftNames[nameIndex]
    @state.leftNames.splice(nameIndex, 1)
    @state.rightNames.push(addRight)

    @setState ->
      leftNames: _.sortBy( @state.leftNames, 'name' )
      rightNames: _.sortBy( @state.rightNames, 'name' )

  changeEventRight: (e) ->
    # delete element
    nameIndex = parseInt(e.target.value, 10)
    addLeft = @state.rightNames[nameIndex]
    @state.rightNames.splice(nameIndex, 1)
    @state.leftNames.push(addLeft)

    @setState ->
      leftNames: _.sortBy( @state.leftNames, 'name' )
      rightNames: _.sortBy( @state.rightNames, 'name' )

  render: ->
    leftComponents = @state.leftNames.map (l, e) =>
      <checkbox names={l.name} slug={@generateSlugLeft(e)} changeEvent={@changeEventLeft} index={e} checked=""></checkbox>

    rightComponents = @state.rightNames.map (l, e) =>
      <checkbox names={l.name} slug={@generateSlugRight(e)} changeEvent={@changeEventRight} index={e} checked="checked"></checkbox>

    <div className="wrap clearfix">
      <div className="left">
        {leftComponents}
      </div>
      <div className="right">
        {rightComponents}
      </div>
    </div>

names = [
  { name: 'Иванов Иван'},
  { name: 'Петров Петр'},
  { name: 'Зеленый Вениамин'},
  { name: 'Гербулов Иван'},
  { name: 'Осипова Анна'},
  { name: 'Мелкумянц Алексей'},
  { name: 'Швыдько Елена'},
  { name: 'Макаров Алексей'},
  { name: 'Декиров Марат'},
  { name: 'Скольник Андрей'}
]

React.render <SearchExample items={names} />, document.querySelector '.render'
