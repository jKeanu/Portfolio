import ParticleBackground from "./component/ParticlesContainer"

function App() {
  return (
    <div className="relative w-full">
      <nav className="portfolio-nav z-10 fixed text-default flex justify-around w-screen p-2 pl-[1200px]">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
        <button className="nav-button">Contact</button>
      </nav>
      <ParticleBackground />
      {/* Other components */}
    </div>
  )
}

export default App
