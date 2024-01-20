import colors from "../../../json/themesColors.json"

export default function reducer(state, action) {
  const theme = JSON.parse(localStorage.getItem("theme")) || {
    theme: "light",
    colors: colors,
  }

  if (action.type === "SWITCH_THEME") {
    if (action.payload === "light") {
      return { theme: "dark", colors }
    } else if (action.payload === "dark") {
      return { theme: "light", colors }
    }
  }

  return theme
}
