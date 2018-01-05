/* eslint-disable no-undef */
import {API_BASE_URL} from './config';

function getChores(cb) {
  return fetch('api/chores/'+ localStorage.getItem('ChappyNest-userID'), {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function getDailyTask(cb){
  return fetch('api/dailytask/'+ localStorage.getItem('ChappyNest-userID'), {
    accept: "application/json"
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

function parentDashboardGetTask(day,cb){
  return fetch('api/parent_task/' + localStorage.getItem('ChappyNest-userID')+'/'+day, {
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

function addTask(task,cb){
  return fetch('api/dailytask', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(task),
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function markTaskCompleted(id,completed,cb){
  return fetch('api/dailytask/'+id+'/'+completed, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

function addChore(chore,cb){
  return fetch('api/chore', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(chore),
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function getChildAccounts(cb){
  return fetch('api/account/'+ localStorage.getItem('ChappyNest-userID'), {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function addAccount(user,cb){
  return fetch('api/account', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(user),
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function login(user,cb){
  return fetch('http://localhost:3001/api/login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(user),
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { markTaskCompleted, parentDashboardGetTask, addTask, login, getChores, getDailyTask, addChore, getChildAccounts, addAccount };
export default Client;

