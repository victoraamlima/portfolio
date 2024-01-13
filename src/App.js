import { Provider } from "react-redux"
import store from "./components/store/store"
import Main from "./components/Main/Main"
import { GlobalStyle } from "./style/globalStyle"

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Main />
      </Provider>
    </>
  )
}

export default App
