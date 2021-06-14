let nextTodoId = 0
export const addPhone = text => ({
  type: 'ADD_PHONE',
  id: nextTodoId++,
  text
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
}
