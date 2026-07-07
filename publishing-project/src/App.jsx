import { Routes, Route } from 'react-router'
import './App.css'
import './index.css'
import { Login } from './pages/auth/login/Login'
import { SignUp } from './pages/auth/signup/SignUp'
import { SignUp2 } from './pages/auth/signup/SignUp2'
import { TwoFA } from './pages/auth/twofa/TwoFA'
import { TwoFaCheck } from './pages/auth/twofa/TowFaCheck'
import { HomePage } from './pages/home/HomePage'
import book1Image from './assets/images/book1.png'
import book3Image from './assets/images/book3.png'
import { EmployeePage } from './pages/manage-employees/EmployeePage'
import { SearchComponent } from './components/SearchComponent'
import { WareHousePage } from './pages/wharehouse/WareHousePage'
import { useState } from 'react'
import { AssignTask } from './pages/manage-employees/AssignTask'
import { Orders } from './components/Orders'
import { EmployeeOptions } from './pages/manage-employees/EmployeeOptions'
import { OrdersPage } from './pages/purchase-orders/OrdersPage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { EditProfilePage } from './pages/profile/EditProfilePage'
import { SalesOrderPage } from './pages/sales-orders/SalesOrdersPage'
import { AssignComponent } from './pages/manage-employees/AssignComponent'
import { PrivacyPage } from './pages/account/PrivacyPage'
import { ChangePassowrd } from './pages/account/ChangePassword'
import { BookDetails } from './pages/home/BookDetails'
import { ManagePhoneNum } from './pages/account/ManagePhoneNum'
import { BookImage } from './components/BookImage'
import { FinishedBooksPage } from './pages/wharehouse/finished-books/FinishedBooksPage'

function App() {
  const books = [
    {
      title: 'SUN EATER',
      image: book1Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'translating',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book1Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'editing',
      id: crypto.randomUUID()
    }, {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'checking',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'translating',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'accepted',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'accepted',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'translating',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'accepted',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'accepted',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'accepted',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'checking',
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      author: 'Megan campisi',
      date: '10/12/2022',
      pages: 222,
      edit: 'first',
      copies: 200,
      price: 300,
      state: 'checking',
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
  const [search, setSearch] = useState(false);
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
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path='/wareHouse'
        element={
          <WareHousePage
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
        element={<AssignTask />}
      />
      <Route
        path='/purchase-orders'
        element={<OrdersPage
          showOptionList={showOptionList}
          setShowOptionList={setShowOptionList}
          search={search}
          setSearch={setSearch}
        />}
      />
      <Route
        path='/profile'
        element={<ProfilePage />}
      />
      <Route
        path='/edit-profile'
        element={<EditProfilePage />}
      />
      <Route
        path='/sales-orders'
        element={<SalesOrderPage
          showOptionList={showOptionList}
          setShowOptionList={setShowOptionList}
          search={search}
          setSearch={setSearch}
        />}
      />
      <Route
        path='/assign-component'
        element={<AssignComponent />}
      />
      <Route
        path='/privacy'
        element={<PrivacyPage />}
      />
      <Route
        path='/change-pw'
        element={<ChangePassowrd />}
      />
      <Route
        path='/manage-phone-number'
        element={<ManagePhoneNum />}
      />
      <Route
        path='/finished-book'
        element={<FinishedBooksPage
          books={books}
          showOptionList={showOptionList}
          setShowOptionList={setShowOptionList}
          search={search}
          setSearch={setSearch}
        />}
      />
      <Route
        path='/test'
        element={<BookImage />}
      />
    </Routes>
  )

}

export default App
