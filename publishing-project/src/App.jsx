import { Routes, Route } from 'react-router'
import './App.css'
import { Login } from './pages/auth/login/Login'
import { SignUp } from './pages/auth/signup/SignUp'
import { SignUp2 } from './pages/auth/signup/SignUp2'
import { TwoFA } from './pages/auth/twofa/TwoFA'
import { TwoFaCheck } from './pages/auth/twofa/TowFaCheck'
import { HomePage } from './pages/home/HomePage'
import book1Image from './assets/images/book1.png'
import book2Image from './assets/images/book2.png'
import book3Image from './assets/images/book3.png'
import { InventoryPage } from './pages/wharehouse/inventory/InventoryPage'
import { InventoryHeader } from './pages/wharehouse/inventory/InventoryHeader'
import { AddBook } from './components/AddBook'
import { BookDetails } from './pages/home/BookDetails'
import { EmployeeComponent } from './pages/manage-employees/EmployeeComponent'
import { EmployeePage } from './pages/manage-employees/EmployeePage'
import { EditEmployee } from './pages/manage-employees/EditEmployee'
import { AddEmployee } from './pages/manage-employees/AddEmployee'
import { SearchComponent } from './components/SearchComponent'
import { WareHousePage } from './pages/wharehouse/WareHousePage'
import { useState } from 'react'
import { EmployeeDetails } from './pages/manage-employees/EmployeeDetails'
import { EmployeeOptions } from './pages/manage-employees/EmployeeOptions'
import { AssignComponent } from './pages/manage-employees/AssignComponent'

function App() {
  const products = [
    {
      title: 'SUN EATER',
      image: book1Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book2Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    }, {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      id: crypto.randomUUID()
    },
  ];

  const internationalIds = [
    {
      number: '+111',
      id: crypto.randomUUID()
    },
    {
      number: '+963',
      id: crypto.randomUUID()
    },
    {
      number: '+098',
      id: crypto.randomUUID()
    },
    {
      number: '+897',
      id: crypto.randomUUID()
    },
    {
      number: '+223',
      id: crypto.randomUUID()
    }
  ];
  const employees = [
    {
      image: '',
      name: 'Soha Alkhateeb',
      type: 'Translator',
      salary: 3000,
      evaluation: 1,
      date: '10/12/2021',
      experience: 3,
      status: 'active',
      works: [
        {
          job: 'translate x book',
          id: crypto.randomUUID()
        },
        {
          job: 'translate y book',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
    {
      image: '',
      name: 'Sam Alkhateeb',
      type: 'Editors',
      salary: 3000,
      evaluation: 1,
      date: '10/12/2021',
      experience: 3,
      status: 'active',
      works: [
        {
          job: 'translate x book',
          id: crypto.randomUUID()
        },
        {
          job: 'translate y book',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
    {
      image: '',
      name: 'Soha Alkhateeb',
      type: 'Translator',
      salary: 3000,
      evaluation: 1,
      date: '10/12/2021',
      experience: 3,
      status: 'active',
      works: [
        {
          job: 'translate x book',
          id: crypto.randomUUID()
        },
        {
          job: 'translate y book',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
  ];
  const [showOptionList, setShowOptionList] = useState(false);
  const [homeProducts, setHomeProducts] = useState(products);
  return (
    
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path='/signup'
        element={<SignUp />}
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
        element={<EmployeeOptions/>}
      />
      <Route
        path='/assign'
        element={<AssignComponent/>}
      />
    </Routes>
  )
  
}

export default App
