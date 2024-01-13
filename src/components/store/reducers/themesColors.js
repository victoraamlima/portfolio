import colors from "../../../json/themesColors.json"

export default function reducer(state = { theme: "light", colors }, action) {
  if (action.type === "SWITCH_THEME") {
    if (action.payload === "light") {
      return { theme: "dark", colors }
    } else if (action.payload === "dark") {
      return { theme: "light", colors }
    }
  }

  return state
}
