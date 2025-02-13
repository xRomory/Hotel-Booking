import React from 'react'
import '.SinglePage.scss'
import { Link } from 'react-router-dom'
const SinglePages = () => {
    return (
        <>
        <HeadTitle />

        <section className ='single-page top' >
            <div className="container">
                <Link to ='/Rooms'> 
                </Link>
            </div>
        </section>
        </>
    )
}       