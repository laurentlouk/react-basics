var expect = require('expect');
var deepfreeze = require('deep-freeze');

/* 
*** Array Mutations
*/

const addCounter = (list) => {
  return [...list, 0];
}

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

/* tests */

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  // blocks mutations
  deepfreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  // blocks mutations
  deepfreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  // blocks mutations
  deepfreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

/* execution */

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('1) All tests passed !');

/*
** Object Mutations
*/

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepfreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('2) All tests passed !');