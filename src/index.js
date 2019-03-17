// import React from 'react';
// import { createStore,combineReducers,applyMiddleware } from 'redux';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
//
// function generateId() {
//     return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
// }
//
//
// // App code
// const ADD_TODO = 'ADD_TODO';
// const REMOVE_TODO = 'REMOVE_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';
// const ADD_GOAL = 'ADD_GOAL';
// const REMOVE_GOAL = 'REMOVE_GOAL';
//
// // Action creator
// function addTodo(todo) {
//     return {
//         type: ADD_TODO,
//         todo,
//     }
// }
//
// // Action creator
// function removeTodo(id) {
//     return {
//         type: REMOVE_TODO,
//         id,
//     }
// }
//
// // Action creator
// function toggleTodo(id) {
//     return {
//         type: TOGGLE_TODO,
//         id,
//     }
// }
//
// // Action creator
// function addGoal(goal) {
//     return {
//         type: ADD_GOAL,
//         goal,
//     }
// }
//
// // Action creator
// function removeGoal(id) {
//     return {
//         type: REMOVE_GOAL,
//         id,
//     }
// }
//
// function todos(state = [], action) {
//
//     switch (action.type) {
//         case ADD_TODO:
//             return state.concat([action.todo])
//         case REMOVE_TODO:
//             return state.filter((todo) => todo.id !== action.id)
//         case TOGGLE_TODO:
//             return state.map((todo) => todo.id !== action.id ? todo:
//                 Object.assign({}, todo, { complete: !todo.complete}))
//         default :
//             return state
//     }
// }
//
// function goals (state = [], action) {
//     switch (action.type) {
//         case ADD_GOAL:
//             return state.concat([action.goal])
//         case REMOVE_GOAL:
//             return state.filter((goal) => goal.id !== action.id)
//         default :
//             return state
//     }
// }
//
//
//
// const checker = (store) => (next) => (action) => {
//
//     if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
//         return alert('Nope, that is a bad idea')
//     }
//
//     if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
//         return alert('Nope, that is a bad idea')
//     }
//
//     return next(action);
// }
//
// const logger = (store) => (next) => (action) => {
//     console.group(action.type);
//     console.log('The action: ', action);
//     const result = next(action);
//     console.log('The new state: ', store.getState());
//     console.groupEnd();
//     return result;
// }
//
//
//
//   const store = createStore(combineReducers({
//     todos,
//     goals,
// }), applyMiddleware(checker, logger))
//
//
// store.subscribe(() => {
//     const {goals, todos} = store.getState();
//
//     document.getElementById('goals').innerHTML='';
//     document.getElementById('todos').innerHTML='';
//
//     goals.forEach(addGoalToDOm);
//     todos.forEach(addTodoToDOm);
// })
//
//
//
// function addingTodo() {
//     const input = document.getElementById('todo');
//     const name = input.value;
//     input.value = '';
//
//     store.dispatch(addTodo({
//         id: generateId(),
//         name,
//         complete: false
//     }))
//
// }
//
// function addingGoal() {
//     const input = document.getElementById('goal');
//     const name = input.value;
//     input.value = '';
//
//     store.dispatch(addGoal({
//         id: generateId(),
//         name,
//     }))
//
// }
//
// document.getElementById('todoBtn')
//     .addEventListener('click', addingTodo)
//
// document.getElementById('goalBtn')
//     .addEventListener('click', addingGoal)
//
// function createRemoveButton(onClick) {
//     const removeBtn = document.createElement('button');
//     removeBtn.innerHTML = 'X';
//     removeBtn.addEventListener('click', onClick);
//     return removeBtn;
// }
//
// function addTodoToDOm(todo) {
//     const node = document.createElement('li');
//     const text = document.createTextNode(todo.name)
//
//     const removeBtn = createRemoveButton(() => {
//         store.dispatch(removeTodo(todo.id));
//     })
//
//     node.appendChild(text);
//     node.appendChild(removeBtn);
//     node.style.textDecoration = todo.complete ? 'line-through' : 'none';
//     node.addEventListener('click', () => {
//         store.dispatch(toggleTodo(todo.id));
//     })
//
//     document.getElementById('todos')
//         .appendChild(node);
// }
//
// function addGoalToDOm(goal) {
//     const node = document.createElement('li');
//     const text = document.createTextNode(goal.name)
//
//     const removeBtn = createRemoveButton(() => {
//         store.dispatch(removeGoal(goal.id));
//     })
//
//     node.appendChild(text);
//     node.appendChild(removeBtn);
//
//     document.getElementById('goals')
//         .appendChild(node);
// }