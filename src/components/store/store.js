import { configureStore } from "@reduxjs/toolkit"
import themeColorsReducer from "./reducers/themesColors"

const store = configureStore({
  reducer: {
    // Add reducers here
    themeColors: themeColorsReducer,
  },
})

export default store
