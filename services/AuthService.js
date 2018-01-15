import config from '../config.js';

const name = {name: 'Jose'}

function signup() {
  const data = fetch(`${config.root}/new_document/?`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name
    }),
  }).catch((error) => {
      console.log('Promise Error!!!')
      console.error(error);
    });
  return data;
}

function getUsers() {
  const data = fetch(`${config.root}/documents/?`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return data;
}

export default { signup, getUsers };
