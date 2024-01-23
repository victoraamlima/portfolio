import colors from "../../../json/themesColors.json"

export default function reducer(state, action) {
  const defaultTheme = {
    theme: "light",
    colors: colors,
  }

  const themeLocalStorage = JSON.parse(
    localStorage.getItem("themePortfolioVictorMeireles")
  )

  let theme = defaultTheme

  if (
    typeof themeLocalStorage === "object" &&
    themeLocalStorage !== null &&
    "theme" in themeLocalStorage &&
    "colors" in themeLocalStorage
  ) {
    theme = themeLocalStorage
  }

  if (action.type === "SWITCH_THEME") {
    theme.theme = action.payload === "light" ? "dark" : "light"
  }

  return theme
}
