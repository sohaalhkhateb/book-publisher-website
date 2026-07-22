import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { SearchComponent } from './components/SearchComponent'
import { employees, internationalIds, products } from './data/data'
import { AuthContext } from './lib/contexts'
import { Login } from './pages/auth/login/Login'
import { SignUp } from './pages/auth/signup/SignUp'
import { SignUp2 } from './pages/auth/signup/SignUp2'
import { TwoFaCheck } from './pages/auth/twofa/TowFaCheck'
import { TwoFA } from './pages/auth/twofa/TwoFA'
import { HomePage } from './pages/home/HomePage'
import { AssignComponent } from './pages/manage-employees/AssignComponent'
import { EmployeeOptions } from './pages/manage-employees/EmployeeOptions'
import { EmployeePage } from './pages/manage-employees/EmployeePage'
import { WareHousePage } from './pages/wharehouse/WareHousePage'


function App() {
  const [showOptionList, setShowOptionList] = useState(false);
  const [homeProducts, setHomeProducts] = useState(products);
  const [user, setUser] = useState(null)


  return (

    <AuthContext value={user}>
      <Routes>
        <Route
          path="/login"
          element={<Login
            setUser={setUser}
          />}
        />
        <Route
          path='/signup'
          element={<SignUp
            setUser={setUser}
          />}
        />
        <Route
          path='/signup2'
          element={<SignUp2 />}
        />
        <Route
          path="/twofa"
          element={<TwoFA internationalIds={internationalIds} />}
        />
        <Route
          path='/twofacheck'
          element={<TwoFaCheck />}
        />
        <Route
          path='/'
          element={
            <HomePage
              setUser={setUser}
              homeProducts={homeProducts}
              setHomeProducts={setHomeProducts}
              showOptionList={showOptionList}
              setShowOptionList={setShowOptionList}
            />
          }
        />
        <Route
          path='/wareHouse'
          element={
            <WareHousePage
              setHomeProducts={setHomeProducts}
              setShowOptionList={setShowOptionList}
              showOptionList={showOptionList}
            />
          }
        />
        <Route
          path='/employees'
          element={
            <EmployeePage
              employees={employees}
              setHomeProducts={setHomeProducts}
              setShowOptionList={setShowOptionList}
              showOptionList={showOptionList}

            />
          }
        />
        <Route
          path='/search'
          element={<SearchComponent />}
        />
        <Route
          path='/employeeOptions'
          element={<EmployeeOptions />}
        />
        <Route
          path='/assign'
          element={<AssignComponent />}
        />
      </Routes>
    </AuthContext >
  )


}

export default App
