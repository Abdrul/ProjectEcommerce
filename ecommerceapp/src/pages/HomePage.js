import React from 'react'
import './HomePage.css'

function HomePage() {






    return (
        <main className='main-home-page'>
            <div className='description-app-container'>
                <img src={"/images/logo.png"} alt="" />
                <h1>Get your groceries delivered to your home</h1>
                <p>The best delivery app in town for delivering your daily fresh groceries</p>
                <button>Shop now</button>
            </div>
            <div className='background-image-description-app'>
                <img src={"/images/bg-first-page.png"} alt="" />
            </div>
        </main>
    )
}

export default HomePage