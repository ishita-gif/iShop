import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple Car",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "HeadPhones",
    },
    {
      cateImg: "./images/category/cat-3.png",
      cateName: "Watches",
    },
    {
      cateImg: "./images/category/cat-4.png",
      cateName: "Airpodes",
    },
    {
      cateImg: "./images/category/cat-5.jpg",
      cateName: "Homepods",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "iPhone",
    },
    {
      cateImg: "./images/category/cat-7.jpg",
      cateName: "Apple Bottle",
    },
    {
      cateImg: "./images/category/cat-8.png",
      cateName: "Mackbook",
    },
    {
      cateImg: "./images/category/cat-9.png",
      cateName: "Apple charger",
    },
    {
      cateImg: "./images/category/cat-10.png",
      cateName: "Headsets",
    },
    {
      cateImg: "./images/category/cat-3.png",
      cateName: "Watches",
    },

  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories