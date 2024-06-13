import { useEffect, useState } from "react";
const HeroSection = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [isBigScreen, setIsBigScreen] = useState<boolean>()


    // this should be run only once per application lifetime

    useEffect(() => {
        const handleScroll = () => {
          const heroHeight = document.querySelector('.hero-section') as HTMLElement; // Hero is 100vh, so use the viewport height
          if(heroHeight){
            const height = heroHeight.offsetHeight
            setIsSticky(window.scrollY >= height);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


        useEffect(() => {
            // Handler to call on window resize
        function handleResize() {
            setIsBigScreen(window.innerWidth/window.innerHeight >= 1.85)
        }
            // Add event listener
            window.addEventListener('resize', handleResize);
            if(!isBigScreen){
                setIsBigScreen(window.innerWidth/window.innerHeight >= 1.85)
            }
            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount and unmount


        //style={{'backgroundPosition': `${isBigScreen?'bottom':'center'}`, 'marginBottom':`${isBigScreen?'-20px':''}`}}
    return (
        <section className={`hero-section h-[100vh] relative`} style={{ 
            'height':`${isBigScreen?'calc(100vh + 150px)':'100vh'}`}}>
            <div className="absolute top-[50%] xxxl:top-calc-50-min-150px left-[50%] translate-x-[-50%] translate-y-[-50%] sm:w-fit w-screen"> 
                <span className="text-default font-raleway xl:text-5xl animate-fadeInUp lg:text-4xl text-3xl sm:inline block text-center">
                    Hello, I'm <strong className="font-raleway xl:text-6xl lg:text-5xl text-4xl opacity-[55%]">John</strong>.
                    <br />
                </span>
                <span className="text-default font-raleway xl:text-5xl animate-fadeInUp1500 lg:text-4xl text-2xl sm:inline block text-center sm:whitespace-nowrap">
                    I'm a full-stack web developer.
                </span>
            </div>
            <div className="flex w-screen justify-center align-middle absolute xxxl:top-calc-75-min-150px top-[75%] left-[50%] translate-x-[-50%] gap-x-3 sm:gap-x-10">
                <button
                    className="text-[#9da3ac] font-raleway hover:backdrop-blur-lg bg-gradient-to-tr 
                    from-transparent via-[rgba(48,62,84,0.25)] to-transparent rounded-md py-2 px-6 shadow 
                    hover:shadow-[#525d71] duration-500 animate-fadeInUp w-fit">
                    View my work
                </button>
                <button
                    className="text-[#9da3ac] font-raleway hover:backdrop-blur-lg bg-gradient-to-tr 
                    from-transparent via-[rgba(48,62,84,0.25)] to-transparent rounded-md py-2 px-6 shadow 
                    hover:shadow-[#525d71] duration-500 animate-fadeInUp">
                    More about me
                </button>
            </div>
            <nav className={`portfolio-nav ${isSticky?'fixed top-[0%]':'absolute top-[100%]'} z-10 text-default flex pl-0 lg:pl-5 top-100 h-fit justify-center lg:justify-start 
                    w-screen`}>
                <ul className="flex gap-x-3 nav-link-lis sm:gap-x-5">
                    <li className="px-2 py-4 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#home" aria-label="Go to Home Page">Home</a>
                    </li> 
                    <li className="px-2 py-4 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#about" aria-label="Learn more About Me">About</a>
                    </li>
                    <li className="px-2 py-4 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#projects" aria-label="View My Projects">Projects</a>
                    </li>
                    <li className="px-2 py-4 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#contact" aria-label="Contact Me">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
)
}

export default HeroSection