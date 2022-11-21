import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "68%",
    height: "400px",
  }
  const mystyle1 = {
    width: "30%",
    height: "400px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='./images/Banner2.webp' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='./images/Banner1.png' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument