import { Routes, Route } from 'react-router'
import { AddEmployee } from './pages/employees/AddEmployee.jsx'
import { AddBook } from './pages/books/AddBook.jsx'
import { Login } from './pages/auth/login/Login'
import { SignUp } from './pages/auth/signup/SignUp'
import { SignUp2 } from './pages/auth/signup/SignUp2'
import { TwoFA } from './pages/auth/twofa/TwoFA'
import { TwoFaCheck } from './pages/auth/twofa/TwoFaCheck'
import AuthGuard from './lib/AuthGuard.jsx'
import { LayoutElement } from './pages/layout/LayoutElement.jsx'
import { HomePageEnhanced } from './pages/home/HomePageEnhanced.jsx'
import { ViewBook } from './pages/books/ViewBook.jsx'
import { EditBook } from './pages/books/EditBook.jsx'
import { Employees } from './pages/employees/Employees.jsx'
import { EditEmployee } from './pages/employees/EditEmployee.jsx'
import { ViewEmployee } from './pages/employees/ViewEmployee.jsx'
import { AddTask } from './pages/tasks/AddTask.jsx'
import { ViewTask } from './pages/tasks/ViewTask.jsx'
import { Tasks } from './pages/tasks/Tasks.jsx'
import { Resources } from './pages/resources/Resources.jsx'
import { AddResource } from './pages/resources/AddResource.jsx'
import { ViewResource } from './pages/resources/ViewResource.jsx'
import { EditResource } from './pages/resources/EditResource.jsx'
import { Task } from './components/Task.jsx'
import { Step1 } from './pages/orders/Step1.jsx'
import { Step2 } from './pages/orders/Step2.jsx'
import { Step3 } from './pages/orders/Step3.jsx'
import { Step4 } from './pages/orders/Step4.jsx'
import { Step5 } from './pages/orders/Step5.jsx'
import { Step6 } from './pages/orders/Step6.jsx'
import { Step7 } from './pages/orders/Step7.jsx'
import { Sales } from './pages/sales/Sales.jsx'
import { GuestLayout } from './pages/layout/GuestLayout.jsx'
import { OrderSuccess } from './pages/orders/OrderSuccess.jsx'
import { Orders } from './pages/orders/Orders.jsx'
import { ViewOrder } from './pages/orders/ViewOrder.jsx'
import './App.css'


function App() {


  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/signup'>
        <Route index element={<SignUp />} />
        <Route path='1' element={<SignUp2 />} />
        <Route path="2" element={<TwoFA />} />
        <Route path='3' element={<TwoFaCheck />} />
      </Route>


      <Route path='guestOrder' element={<GuestLayout />}>

        <Route path='1' element={<Step1 />} />
        <Route path='2' element={<Step2 />} />
        <Route path='3' element={<Step3 />} />
        <Route path='4' element={<Step4 />} />
        <Route path='5' element={<Step5 />} />
        <Route path='6' element={<Step6 />} />
        <Route path='7' element={<Step7 />} />

        <Route path='success' element={<OrderSuccess />} />

      </Route>


      <Route element={<AuthGuard />}>
        <Route element={<LayoutElement />}>
          <Route path='/' element={<HomePageEnhanced />} />


        <Route path='books'>
          <Route path='add' element={<AddBook />} />
          <Route path=':id' element={<ViewBook />} />
          <Route path='edit/:id' element={<EditBook />} />
        </Route>
        </Route>

        <Route path='employees'>
          <Route index element={<Employees />} />
          <Route path='add' element={<AddEmployee />} />
          <Route path=':id' element={<ViewEmployee />} />
          <Route path='edit/:id' element={<EditEmployee />} />
        </Route>

        <Route path='tasks'>
          <Route index element={<Tasks />} />
          <Route path='add' element={<AddTask />} />
          <Route path=':id' element={<ViewTask />} />
        </Route>


        <Route path='resources'>
          <Route index element={<Resources />} />
          <Route path='add' element={<AddResource />} />
          <Route path=':id' element={<ViewResource />} />
          <Route path='edit/:id' element={<EditResource />} />
        </Route>

        <Route path='orders'>
          <Route index element={<Orders />} />
          <Route path=':id' element={<ViewOrder />} />
        </Route>

        <Route path='sales'>
          <Route index element={<Sales />} />
        </Route>
      </Route>


      <Route
        path='/test'
        element={<LayoutElement />}
      />

    </Routes>

  )

}

export default App

