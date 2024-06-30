import { useEffect, useState } from "react";
const HeroSection = () => {
    const [isSticky, setIsSticky] = useState(false)

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


    return (
        <section className="hero-section relative px-0" id="home">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:w-fit w-full"> 
                <span className="text-default font-raleway xl:text-5xl animate-fadeInUp lg:text-4xl text-3xl sm:inline block text-center">
                    Hello, I'm <strong className="font-raleway xl:text-6xl lg:text-5xl text-4xl text-[#aac3eb8b]">John</strong>.
                    <br />
                </span>
                <span className="text-default font-raleway xl:text-5xl animate-fadeInUp1500 lg:text-4xl text-2xl sm:inline block text-center sm:whitespace-nowrap">
                    I'm a full-stack web developer.
                </span>
            </div>
            <div className="flex w-full justify-center align-middle absolute xxxl:top-calc-75-min-150px top-[75%] left-[50%] translate-x-[-50%] gap-x-3 sm:gap-x-10">
                <a
                    className="text-[#9da3ac] font-raleway bg-gradient-to-tr 
                    from-transparent via-[rgba(48,62,84,0.25)] to-transparent rounded-md py-2 px-6 shadow 
                    hover:shadow-[#525d71] duration-500 animate-fadeInUp w-fit" href="#projects">
                    View my work
                </a>
                <a
                    className="text-[#9da3ac] font-raleway bg-gradient-to-tr 
                    from-transparent via-[rgba(48,62,84,0.25)] to-transparent rounded-md py-2 px-6 shadow 
                    hover:shadow-[#525d71] duration-500 animate-fadeInUp" href="#about-me">
                    More about me
                </a>
            </div>
            <nav className={`portfolio-nav ${isSticky?'fixed top-[0%]':'absolute top-[100%]'} z-10 text-default flex pl-0 lg:pl-5 top-100 h-fit justify-center lg:justify-start 
                    w-full`} style={{backgroundColor:`${isSticky?'#363d5812':''}`, borderBottomColor:`${isSticky?'#8080802a':''}`, backdropFilter: `${isSticky?'blur(6px)':''}`, WebkitBackdropFilter:`${isSticky?'blur(6px)':''}`}}>
                <ul className="flex gap-x-3 nav-link-lis sm:gap-x-5">
                    <li className="xsm:px-2 py-4 px-1 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#home" aria-label="Go to Home Page">Home</a>
                    </li> 
                    <li className="xsm:px-2 py-4 px-1 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#about-me" aria-label="Learn more About Me">About</a>
                    </li>
                    <li className="xsm:px-2 py-4 px-1 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#projects" aria-label="View My Projects">Projects</a>
                    </li>
                    <li className="xsm:px-2 py-4 px-1 sm:p-4 nav-link-container">
                        <a className="nav-link" href="#contact" aria-label="Contact Me">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
)
}

export default HeroSection