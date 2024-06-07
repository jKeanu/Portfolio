import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleBackground = () => {
    const [ init, setInit ] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async(container:Container|undefined) => {
        console.log(container);
    };

    return (
        <section className="hero-section h-[100vh] relative">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:w-fit w-screen"> 
                <span className="text-default font-raleway xl:text-5xl animate-fadeInUp lg:text-4xl text-3xl sm:inline block text-center">
                    Hello, I'm <strong className="font-raleway xl:text-6xl lg:text-5xl text-4xl opacity-[55%]">John</strong>.
                    <br />
                </span>
                <span className="text-default font-raleway xl:text-5xl animate-fadeInUp1500 lg:text-4xl text-2xl sm:inline block text-center sm:whitespace-nowrap">
                    I'm a full-stack web developer.
                </span>
            </div>
            <div className="flex justify-center align-middle absolute top-[80%] left-[50%] translate-x-[-50%] gap-x-3 sm:gap-x-10 w-screen">
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
        </section>
)
}

export default ParticleBackground