import store from '../store'
import axios from 'axios'

export function getProfile(){
  axios.get("http://localhost:3001/users").then(resp => {
    store.dispatch({
      type:'GET_PROFILE',
      profile: resp.data
    })
  })
}

export function getRepo(){
  axios.get("http://localhost:3001/repos").then(resp =>{
    store.dispatch({
      type:'GET_REPOS',
      repos: resp.data
    })
  })
}