export default function reducer(state, action) {
  let ProjectInfo = {}

  if (action.type === "SELECT_PROJECT") {
    ProjectInfo = action.payload
  }
  
  if (action.type === "CLOSE_SELECT_PROJECT") {
    ProjectInfo = {}
  }

  return ProjectInfo
}
