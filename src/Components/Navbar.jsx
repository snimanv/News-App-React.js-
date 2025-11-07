import React from 'react'

export default function Navbar({setCategory}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className='badge text-dark bg-light fs-5'>NewsCast</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#" onClick={() => setCategory("general")}>General</a>
                    <a className="nav-link" href="#" onClick={() => setCategory("business")}>Business</a>
                    <a className="nav-link" href="#" onClick={() => setCategory('entertainment')}>Entertainment</a>
                    <a className="nav-link" href="#" onClick={() => setCategory('health')}>Health</a>
                    <a className="nav-link" href="#" onClick={() => setCategory('science')}>Science</a>
                    <a className="nav-link" href="#" onClick={() => setCategory('sports')}>Sports</a>
                    <a className="nav-link" href="#" onClick={() => setCategory('technology')}>Technology</a>
                    {/* <a className="nav-link" href="#">Pricing</a> */}
                    
                </div>
            </div>
        </div>
    </nav>
  )
}
