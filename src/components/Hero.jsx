/* eslint-disable no-unused-vars */
import React from 'react'

/**
 * Hero Component
 * A responsive grid layout displaying collection of shoes
 * Responsive breakpoints:
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
export default function Hero() {
    const imagesAndText = [
        {image: './images/collection-1.jpg', text: 'Men/Women', subtext: 'Running Sneaker Shoes', },
        {image: './images/collection-2.jpg', text: 'Men/Women', subtext: 'Running Sneaker Shoes'},
        {image: './images/collection-3.jpg', text: 'Men/Women', subtext: 'Running Sneaker Shoes'},
        {image: './images/collection-3.jpg', text: 'Men/Women', subtext: 'Running Sneaker Shoes'},
        {image: './images/collection-2.jpg', text: 'Men/Women', subtext: 'Running Sneaker Shoes'},
        {image: './images/collection-1.jpg', text: 'Men/Women', subtext: 'Running Sneaker Shoes'}
    ]
  
    return (   
    <div className='flex justify-center items-center px-4 py-5 animate-fade-in'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl'>
        {
            imagesAndText.map((image, index)=>(
                <div className='flex flex-col items-center transform hover:scale-105 transition-all duration-300 ease-in-out' key={index}>
                    <img 
                        src={image.image} 
                        alt={`Collection item ${index + 1}`}
                        className='w-full max-w-[400px] rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                    />
                    <p className='text-center font-bold text-lg sm:text-xl mt-2 hover:text-blue-600 transition-colors duration-300'>{image.text}</p>
                    <p className='text-center font-bold text-xl sm:text-2xl hover:text-blue-600 transition-colors duration-300'>{image.subtext}</p>
                    <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>Add to Cart</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}