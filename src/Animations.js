import React from 'react'

export default function Animations() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">

    <div id="content">

        
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

        
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

        
            <ul className="navbar-nav ml-auto">

            
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="/animations" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

        
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/animations" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
            
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Alerts Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="/animations">Show All Alerts</a>
                    </div>
                </li>

                
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/animations" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
            
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                    alt="..."/>
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                    alt="..."/>
                                <div className="status-indicator"></div>
                            </div>
                            <div>
                                <div className="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                <div className="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                    alt="..."/>
                                <div className="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="/animations">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                    alt="..."/>
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="/animations">Read More Messages</a>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="/animations" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <img className="img-profile rounded-circle"
                            src="img/undraw_profile.svg"/>
                    </a>
                    
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="/animations">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="/animations">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="/animations">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/animations" data-toggle="modal" data-target="/animationslogoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
        <div className="container-fluid">

            
            <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
            <p className="mb-4">Bootstrap's default utility classNamees can be found on the official <a
                    href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classNamees built into Bootstrap's
                framework.</p>

        
            <div className="row">

                
                <div className="col-lg-6">

                    <div className="card position-relative">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <code>.animated--grow-in</code>
                            </div>
                            <div className="small mb-1">Navbar Dropdown Example:</div>
                            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                                <a className="navbar-brand" href="/animations">Navbar</a>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/animations" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right animated--grow-in"
                                            aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/animations">Action</a>
                                            <a className="dropdown-item" href="/animations">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/animations">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <p className="mb-0 small">Note: This utility animates the CSS transform property,
                                meaning it will override any existing transforms on an element being animated!
                                In this theme, the grow in animation is only being used on dropdowns within the
                                navbar.</p>
                        </div>
                    </div>

                </div>

                
                <div className="col-lg-6">

                    <div className="card position-relative">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <code>.animated--fade-in</code>
                            </div>
                            <div className="small mb-1">Navbar Dropdown Example:</div>
                            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                                <a className="navbar-brand" href="/animations">Navbar</a>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/animations" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in"
                                            aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/animations">Action</a>
                                            <a className="dropdown-item" href="/animations">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/animations">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="small mb-1">Dropdown Button Example:</div>
                            <div className="dropdown mb-4">
                                <button className="btn btn-primary dropdown-toggle" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                                </button>
                                <div className="dropdown-menu animated--fade-in"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/animations">Action</a>
                                    <a className="dropdown-item" href="/animations">Another action</a>
                                    <a className="dropdown-item" href="/animations">Something else here</a>
                                </div>
                            </div>
                            <p className="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                                it will override any existing opacity on an element being animated!</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        

    </div>
    </div>

  )
}
