@genType.as("Form") @react.component
let make = (~onSubmit) => {
  let (value, setValue) = React.useState(() => "")

  let handleInput = evt => {
    let target = ReactEvent.Form.target(evt)
    setValue(target["value"])
  }

  let handleSubmit = evt => {
    ReactEvent.Form.preventDefault(evt)
    onSubmit(value)
    setValue(_ => "")
  }

  <form onSubmit=handleSubmit>
    <input autoFocus=true value onInput=handleInput />
    <button type_="submit"> {React.string("Submit")} </button>
  </form>
}
