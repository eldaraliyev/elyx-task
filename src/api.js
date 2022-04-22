import { ref } from 'vue'

export const signUp = ref(false)

export const changeMethod = () => {
  signUp.value = !signUp.value;
};

const API_LINK = "https://reqres.in/api"

export const register = async() => {
  const response = await fetch(API_LINK + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }),
  })
  const resData = await response.json()
  console.log(resData);
  alert(`NEW USER REGISTRATION SUCCESSFUL.  ${JSON.stringify(resData)}`)
}

export const login = async() => {
  const response = await fetch(API_LINK + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }),
  })
  const resData = await response.json()
  console.log(resData);
  alert(`LOGIN SUCCESSFUL.  ${JSON.stringify(resData)}`)
}