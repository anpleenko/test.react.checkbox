do (React=React, _=_) ->
  checkbox = require('./checkbox')

  SearchExample = React.createClass
    getInitialState: ->
      leftNames: _.sortBy( @props.items, 'name' )
      rightNames: []

    generateSlug: (text, side) ->
      if side == 'left'
        return "item-name-left#{text}"
      else
        return "item-name-right#{text}"

    refreshState: ->
      @setState ->
        leftNames: _.sortBy( @state.leftNames, 'name' )
        rightNames: _.sortBy( @state.rightNames, 'name' )

    changeEventLeft: (e) ->

      # delete element
      nameIndex = parseInt(e.target.value, 10)
      addRight = @state.leftNames[nameIndex]
      @state.leftNames.splice(nameIndex, 1)
      @state.rightNames.push(addRight)
      do @refreshState

    changeEventRight: (e) ->

      # delete element
      nameIndex = parseInt(e.target.value, 10)
      addLeft = @state.rightNames[nameIndex]
      @state.rightNames.splice(nameIndex, 1)
      @state.leftNames.push(addLeft)
      do @refreshState

    render: ->
      leftComponents = @state.leftNames.map (l, e) =>
        <checkbox names={l.name} slug={@generateSlug(e, 'left')} changeEvent={@changeEventLeft} index={e} checked=""></checkbox>

      rightComponents = @state.rightNames.map (l, e) =>
        <checkbox names={l.name} slug={@generateSlug(e, 'right')} changeEvent={@changeEventRight} index={e} checked="checked"></checkbox>

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
