import {Home, Movies, MovieDetails,SeatLayout, MyBooking, Favorite} from './pages'
import { Navbar , Footer} from './components'
import {Toaster} from 'react-hot-toast'
import {Routes, Route,  useLocation} from 'react-router-dom'
const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path="/"                       element={<Home/>}         />
      <Route path="/movies"                 element={<Movies/>}       />
      <Route path="/movies/:id"             element={<MovieDetails/>} />
      <Route path="/movies/:id/:date"       element={<SeatLayout/>}   />
      <Route path="/my-bookings"            element={<MyBooking/>}    />
      <Route path="/favorite"               element={<Favorite/>}    />
 
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
