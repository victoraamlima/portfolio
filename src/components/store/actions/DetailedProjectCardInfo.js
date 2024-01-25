function selectProject(project) {
  return {
    type: "SELECT_PROJECT",
    payload: project,
  }
}

function closeSelectProject() {
  return {
    type: "CLOSE_SELECT_PROJECT",
  }
}

export { selectProject, closeSelectProject }
