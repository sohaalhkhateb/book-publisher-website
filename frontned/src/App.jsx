import { Routes, Route } from 'react-router'
import { Login } from './pages/auth/login/Login'
import { SignUp } from './pages/auth/signup/SignUp'
import { SignUp2 } from './pages/auth/signup/SignUp2'
import { TwoFA } from './pages/auth/twofa/TwoFA'
import { TwoFaCheck } from './pages/auth/twofa/TowFaCheck'
import { HomePage } from './pages/home/HomePage'
import { EmployeePage } from './pages/manage-employees/EmployeePage'
import { SearchComponent } from './components/SearchComponent'
import { WareHousePage } from './pages/wharehouse/WareHousePage'
import { useState } from 'react'
import { AssignTask } from './pages/manage-employees/AssignTask'
import { EmployeeOptions } from './pages/manage-employees/EmployeeOptions'
import { OrdersPage } from './pages/purchase-orders/OrdersPage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { EditProfilePage } from './pages/profile/EditProfilePage'
import { SalesOrderPage } from './pages/sales-orders/SalesOrdersPage'
import { AssignComponent } from './pages/manage-employees/AssignComponent'
import { PrivacyPage } from './pages/account/PrivacyPage'
import { ChangePassowrd } from './pages/account/ChangePassword'
import { ManagePhoneNum } from './pages/account/ManagePhoneNum'
import { FinishedBooksPage } from './pages/wharehouse/finished-books/FinishedBooksPage'
import { BooksInProgressPage } from './pages/wharehouse/books-in-progress/BooksInProgressPage'
import { BooksReviewNeedPage } from './pages/wharehouse/books-review-needed/BooksReviewNeedPage'
import { SamplesBooksPage } from './pages/wharehouse/samples/SamplesBooksPage'
import { BooksNotSoldPage } from './pages/wharehouse/books-not-sold/BooksNotSoldPage'
import { InventoryPage } from './pages/wharehouse/inventory/InventoryPage'
import { books } from '../src/backend-json/books'
import { employees } from '../src/backend-json/employees'
import { internationalIds } from '../src/backend-json/internationalIds'
import { GoodsPage } from './pages/wharehouse/goods/GoodsPage'
import { EbooksPage } from './pages/wharehouse/ebooks/EbooksPage'
import { ResourcesPage } from './pages/resources/ResourcesPage'
import { Button } from './components/Button'
import addImage from '../src/assets/images/icons/add.png'
import AuthGuard from './lib/AuthGuard.jsx'
import './App.css'
import PageLayout from './pages/PageLayout.jsx'
import { OrdersHeader } from './components/OrdersHeader.jsx'
import { WarehouseHeader } from './components/WareHouseHeader.jsx'
import { LayoutElement } from './pages/layout/LayoutElement.jsx'
import { HomePageEnchanced } from './pages/home/HomePageEnchanced.jsx'



function App() {
  const [user, setUser] = useState(null);
  const [showOptionList, setShowOptionList] = useState(false);
  const [search, setSearch] = useState(false);
  return (

    <Routes>
      <Route element={<AuthGuard user={user} />}>

        <Route path="/login" element={<Login />} />

        <Route path='/signup'>
          <Route index element={<SignUp setUser={setUser} />} />
          <Route path='1' element={<SignUp2 />} />
          <Route path="2" element={<TwoFA internationalIds={internationalIds} />} />
          <Route path='3' element={<TwoFaCheck />} />
        </Route>

        <Route element={<LayoutElement />}>
          <Route path='/' element={<HomePageEnchanced books={books} />}>
          </Route>
        </Route>






        {/* <Route
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
          /> */}
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
          path='/progress-books'
          element={<BooksInProgressPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />}
        />
        <Route
          path='/need-review-books'
          element={<BooksReviewNeedPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />}
        />
        <Route
          path='/samples'
          element={<SamplesBooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />}
        />
        <Route
          path='/not-sold-books'
          element={<BooksNotSoldPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />}
        />
        <Route
          path='/ebooks'
          element={<EbooksPage
            books={books}
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />}
        />
        <Route
          path='/inventory'
          element={<InventoryPage />}
        />
        <Route
          path='/goods'
          element={<GoodsPage />}
        />
        <Route
          path='/resources'
          element={<ResourcesPage
            showOptionList={showOptionList}
            setShowOptionList={setShowOptionList}
            search={search}
            setSearch={setSearch}
          />}
        />

      </Route>
      <Route
        path='/test'
        element={<LayoutElement
          setShowOptionList={setShowOptionList}
          showOptionList={showOptionList}
        />}
      />
    </Routes>

  )

}

export default App
