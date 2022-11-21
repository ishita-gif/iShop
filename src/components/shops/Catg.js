import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/catg1.jpg",
      cateName: "iPhones",
    },
    {
      cateImg: "./images/category/catg1.jpg",
      cateName: "iPad",
    },
    {
      cateImg: "./images/category/catg1.jpg",
      cateName: "Macbook",
    },
    {
      cateImg: "./images/category/catg1.jpg",
      cateName: "Apple Watch",
    },
    {
      cateImg: "./images/category/catg1.jpg",
      cateName: "Apple TV",
    },
    {
      cateImg: "./images/category/catg1.jpg",
      cateName: "Home Pod",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brand </h1>
          <h1>Apple </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Products </button>
        </div>
      </div>
    </>
  )
}

export default Catg