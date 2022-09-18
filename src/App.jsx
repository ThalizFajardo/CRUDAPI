import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])
  const [chosenOne, setChosenOne] = useState(null)


  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
  }

  const addUser = (newUser) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", newUser)
      .then(() => getUsers())
      .catch(error => console.log(error.response))
  }

  const selectUserToEdit = (user) => {
    setChosenOne(user)
  }

  const update = (newUser) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${chosenOne.id}/`, newUser)
      .then(() => getUsers())
      .catch(error => console.log(error.response))
  }


  const deleteUser = (id) => {

    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  return (
    <div className="App">
      <UsersList
        users={users}
        selectUserToEdit={selectUserToEdit}
        deleteUser={deleteUser}
      />
      <UsersForm
        addUser={addUser}
        chosenOne={chosenOne}
        update={update}
      />
    </div>
  )
}

export default App
