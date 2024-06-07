import ParticleBackground from "./component/ParticlesContainer"

function App() {
  return (
    <div className="relative w-full">
      <nav className="portfolio-nav z-10 fixed text-default flex w-screen pl-5 top-0 h-fit">
        <ul className="flex gap-x-5 nav-link-list">
          <li className="p-6 nav-link-container">
            <a className="nav-link">Home</a>
          </li> 
          <li className="p-6 nav-link-container">
            <a className="nav-link">About</a>
          </li>
          <li className="p-6 nav-link-container">
            <a className="nav-link">Projects</a>
          </li>
          <li className="p-6 nav-link-container">
            <a className="nav-link">Contact</a>
          </li>
        </ul>
        
      </nav>
      <ParticleBackground />
      {/* Other components */}
    </div>
  )
}

export default App
