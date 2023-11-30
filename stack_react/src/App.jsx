import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import CreateNotes from './pages/CreateNotes/CreateNotes'
import CreateUser from './pages/createUser/CreateUser'
import Notes from './pages/Notes/notes'
import EditNote from './pages/EditNote/editNote'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="cnote" element={<CreateNotes />} />
          <Route path="notes" element={<Notes />} />
          <Route path="cuser" element={<CreateUser />} />
          <Route path="enote" element={<EditNote />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
