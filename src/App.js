import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useEffect, useState } from "react";
import './App.css';
import Landing from './components/Landing';
import Profile from './components/Profile';


import { USERS_API_URL } from "./const";
import Post from './components/Post';
import Main from './components/Main';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: 'profile/:id',
        element: <Profile />
      },
      {
        path: 'post',
        element: <Post />,
      },
      {
        path: 'gallery',
        element: <Post />
      },
      {
        path: 'todo',
        element: <Post />
      }
    ]
  },
])

function App() {
  const [users, setUsers] = useState([]);
  const [profileId, setProfileId] = useState(1);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  async function getUsers() {
    const data = await fetch(USERS_API_URL);
    const jsonData = await data.json();
    setUsers(jsonData.users);
  }
  return (
    <UserContext.Provider value={{ users: users, profileId: profileId, setProfileId: setProfileId }}>
      <div className="App">
        <header className="App-header">
          <RouterProvider router={appRouter} />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;

