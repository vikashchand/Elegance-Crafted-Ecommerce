import React from 'react'
import './basicstart.css'

const BasicStarterPack = () => {
  return (
    <section className='bsp_container'>
        <div className='bsp_content'>
            <h1>Decorate Your Home</h1>
            <div className="bsp_para">
            <p>
            Transform your living space into a haven of elegance and style with our handpicked selection of exquisite home decor products. Elevate every corner with our curated pieces, designed to blend seamlessly with your personal aesthetic, creating a home that reflects your unique taste and personality
            </p>
            </div>
            
            <div className="btn_container">
                <button className='button_primary'>
                    Explore New Collection
                </button>
            </div>
        </div>

    </section>
  )
}

export default BasicStarterPack