import Navbar from "./components/Navbar"
import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import EditTodo from "./pages/EditTodo"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './pages/style.css'
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <h1>Todo List</h1>
        <div className="toDoList">
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/add-todo'
            element={<AddTodo />}
          />
          <Route
            // dynamic :id to create custom route
            path='/edit-todo/:id'
            element={<EditTodo />}
          />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App