import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ClothesDisplay from '../../components/ClothesDisplay/ClothesDisplay'
import Navbar from '../../components/Navbar/Navbar'
import AppDownload from '../../components/AppDownload/AppDownload'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Categories/Categories'

const Home = () => {

 const [category, setCategory] = useState("All");

  return (
    <> 
    
      <Header/>
       <Categories
        selectedCategory={category}
        onCategoryChange={setCategory}
      />
      
      <ClothesDisplay category={category}/>
     
      
    </>
  )
}

export default Home
