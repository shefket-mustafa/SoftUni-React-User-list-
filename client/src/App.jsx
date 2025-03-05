 import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import UserList from './components/UserList'

function App() {
  

  return (
    <>

{/* <!-- Header component --> */}
 <Header />

  {/* <!-- Main component  --> */}
  <main className="main">
    {/* <!-- Section component  --> */}
    <UserList />

  

    

  </main>


  {/* <!-- Footer component  --> */}
  <Footer />

     </>
  )
}

export default App
