import React from 'react';

const UsersList = ({ users, deleteUser, selectUserToEdit }) => {
    return (
        <div className='listContainer'>
            <h1>Users List</h1>
            <ul>

                {
                    users.map(user =>
                        <li key={user.id} className="userCard">
                            <h3>{user.first_name} {user.last_name}</h3>
                            <p><b>Email : </b>{user.email}</p>
                            <p><b>Password: </b>{user.password}</p>
                            <p><b>Birthday: </b>{user.birthday}</p>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                            <button onClick={() => selectUserToEdit(user)}>Edit</button>
                        </li>

                    )
                }
            </ul>

        </div>
    );
};

export default UsersList;