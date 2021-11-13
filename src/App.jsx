import React from 'react';
import { Events } from './pages/Events'

export default function App() {
const onToggle = ()=>{
  document.body.classList.toggle('menu-open');
}

  return (
    <div id="top" className="app-wrapper flex-col">
      <nav className="myNavBar flex-evenly">
        <a href="#event">Events</a>
        <a href="#birth">Birth</a>
        <a href="#death">Death</a>
      </nav>
      <span onClick={onToggle} class="mobile-menu">☰</span>
      <Events onToggle={onToggle} />
    </div>
  )
}
