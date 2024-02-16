import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Stock from './pages/Stock/Stock'
import Dashboard from './pages/Dashboard/Dashboard'

export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks/:symbol" element={<Stock/>}/>
                <Route path="/stocks" element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}