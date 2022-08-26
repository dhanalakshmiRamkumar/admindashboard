import React from "react";
import {BrowserRouter,Link , NavLink , Switch } from 'react-router-dom';




      export default function Sidebar() {
        return (
          <div>
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      
        
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div class="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
         
          <hr className="sidebar-divider my-0"/>
      
      
          <li className="nav-item active">
              <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a>
          </li>
      
          
          <hr className="sidebar-divider"/>
      
         
          <div className="sidebar-heading">
              Interface
          </div>
      
          <div class="dropdown">
  <button className="btn btn-primary nav-item active" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    components
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a className="nav-link" href="/button">Button</a></li>
    <li><a className="nav-link" href="/card">Card</a></li>
    
  </ul>
</div>
      

<div class="dropdown">
  <button class="btn btn-primary nav-item active" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fas fa-fw fa-wrench"></i> Utilites
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="nav-link" href="/color">Color</a></li>
    <li><a class="nav-link" href="/border">Border</a></li>
    <li><a class="nav-link" href="/animations">Animations</a></li>
    <li><a class="nav-link" href="/other">Other</a></li>
  </ul>
</div>
      
          
          <hr className="sidebar-divider"/>
      
          
          <div className="sidebar-heading">
              Addons
          </div>
             
          <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fas fa-fw fa-wrench"></i> <i class="fas fa-fw fa-folder"></i> Pages
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/login">Login</a></li>
    <li><a class="dropdown-item" href="/register">Register</a></li>
    <li><a class="dropdown-item" href="/forgotpassword">Forgot Password</a></li>
    <hr className="sidebar-divider"/>
      
          
      <div className="sidebar-heading" >
          OTHER PAGES
      </div>
    <li><a class="dropdown-item" href="/page">404 Page</a></li>
    <li><a class="dropdown-item" href="/blankpage">Blank Page</a></li>
  </ul>
</div>
          <li className="nav-item">
              <a className="nav-link" href="charts.html">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></a>
          </li>
      
      
          <li className="nav-item">
              <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-table"></i>
               <span>Tables</span>
               </a>
              
  

          </li>
      
          <hr className="sidebar-divider d-none d-md-block"/>
      
          <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle"></button>
              
          </div>
      
          
          <div className="sidebar-card d-none d-lg-flex">
              <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
              <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
              <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
          </div>
          
      </ul>
      
      </div>
        );
      }
      
      