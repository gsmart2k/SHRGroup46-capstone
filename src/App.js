import React from 'react'
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";

//read through comments on each component and pages to understand properly 

// only tailwind and css modules are used in this project, any additional libraries should be told to the lead before installation

//Note: you can use normal import statement on the pages. Lazy load is for only Routing pages

// API's too have been fetched in utility folder you can import and use with the syntax below

import { fetchAllData,fetchCompanyQuantity,fetchPersonQuantity,fetchProductQuantity } from "./utilities/apis";
// fetchAllData(input endpoint here to fetch all data).then(data =>console.log(data) )
// fetchPersonQuantity(input quantity here to fetch an amount of data).then(data =>console.log(data) )
// fetchProductQuantity(input quantity here to fetch an amount of data).then(data =>console.log(data) )
// fetchCompanyQuantity(input quantity here to fetch an amount of data).then(data =>console.log(data) )

// endpoints are as follows:
// https://fakerapi.it/api/v1/products?_quantity=1
// https://fakerapi.it/api/v1/companies?_quantity=1
// https://fakerapi.it/api/v1/persons?_quantity=10
// https://fakerapi.it/api/v1/products
// https://fakerapi.it/api/v1/companies
// https://fakerapi.it/api/v1/persons

// check utilities folder for more details on the api functions

// happy coding


const Nav=lazy(()=>import('./components/nav/Nav'));
const Home=lazy(()=>import('./pages/home/Home'));
const Dashboard=lazy(()=>import('./pages/dashboard/Dashboard'))
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const Login=lazy(()=>import('./pages/login/Login'))
const Footer=lazy(()=>import('./components/footer/Footer'))



const quantity = 12;

function App() {

  const[products, setProducts] = useState('')

  const [members,setMembers]=useState(null)

  useEffect(() => {
    fetchProductQuantity(quantity).then(data =>setProducts(data.data) )

    fetchAllData("https://fakerapi.it/api/v1/persons").then(data =>setMembers(data))
  }, [])

  return (
    <div className="App">

<Suspense fallback={<h1>Loading...</h1>}>
  <Nav/>
  <Router>
<Routes>
<<<<<<< HEAD
<Route exact path="/" element={<Home/>} />
<Route path="/product" element={<Product/>} />
=======
<Route path="/" element={<Home/>} />
<Route path="/product" element={<Product products = {products}/>} />
>>>>>>> 51a958567b6e7eac65d0c0f8e474ceaa6adab97b
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/login" element={<Login/>} />
<Route path="/members" element={<Members members={members}/>} />
</Routes>
</Router>
<Footer/>
</Suspense>
    </div>
  );
}

export default App;
