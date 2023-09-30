import React from 'react'
import './header.css'

const Header = () => {
    return (
        <section className='header_container'>
            <div className="content">
                <h2>Collection is here</h2>
                <p>
                    Induldge in the artistry of Handcrafted goods - where every purchase tells a story and supports an artisans' dreams. Explore out curated Collection today.
                </p>

                <div className='button_contain'>
                    <button className='button_primary'>Explore</button>

                </div>
            </div>
        </section>
    )
}

export default Header