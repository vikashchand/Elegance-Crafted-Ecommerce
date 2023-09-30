import React from 'react'
import './shopbycategory.css'
import card1 from '../images/card1.png.png'
import card2 from '../images/card2.png.png'
import card3 from '../images/card3.png.png'
import card4 from '../images/card4.png.png'




const ShopByCategory = () => {
  return (
    <section className='shop_container'>
        <div className="shop_content">
            <div className="shop_headings">
                <h3>Shop By Category</h3>
                <button className="btn-tertiary">
                    Browse all catergory >
                </button>

            </div>
            <div className="shop_cards">
                <div className="card">
                    <img src={card1} className='card-img' alt="" />
                    <div className="card-body">
                        <div className='card_heading'>
                            <p>Exclusively Creative</p>
                            <h1>Canvas Painting</h1>
                            <button className="btn-tertiary">
                                See Products >
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card2} className='card-img' alt="" />
                    <div className="card-body">
                    <div className='card_heading'>
                            <p>Exclusively Creative</p>
                            <h1>Canvas Painting</h1>
                            <button className="btn-tertiary">
                                See Products >
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card3} className='card-img' alt="" />
                    <div className="card-body">
                    <div className='card_heading'>
                            <p>Exclusively Creative</p>
                            <h1>Canvas Painting</h1>
                            <button className="btn-tertiary">
                                See Products >
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={card4} className='card-img' alt="" />
                    <div className="card-body">
                    <div className='card_heading'>
                            <p>Exclusively Creative</p>
                            <h1>Canvas Painting</h1>
                            <button className="btn-tertiary">
                                See Products >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopByCategory