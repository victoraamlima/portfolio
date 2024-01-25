import { configureStore } from "@reduxjs/toolkit"
import themeColorsReducer from "./reducers/themesColors"
import selectedProjectReducer from "./reducers/detailedProjectCardInfo"

const store = configureStore({
  reducer: {
    selectedProject: selectedProjectReducer,
    themeColors: themeColorsReducer,
  },
})

export default store
