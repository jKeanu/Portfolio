import 'aos/dist/aos.css';  // Import the CSS
import useAOS from '../customHooks/useAOS';

const AboutMe:React.FC=()=>{
    
    useAOS()

    return(
        <section className="about-me-section bg-[#0b0f2f]" id='about-me'>
            <h1 className="font-bold font-raleway text-center text-3xl lg:text-4xl" data-aos="fade-right">About</h1>
            <div className="about-me-container">
                <div className="about-me-info-container flex justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-x-12 lg:gap-y-0 gap-y-10">
                    <div className="my-image-container" data-aos="fade-zoom-in" data-aos-delay="150">
                        <img src="/img/me.png" className="h-[225px] w-[225px] lg:h-[250px] lg:w-[250px] lg:min-w-[250px] xl:h-[325px] xl:w-[325px]
                            object-cover rounded-2xl"/>
                    </div>
                    <div className="my-info-container flex justify-center items-center flex-col gap-y-6" data-aos="fade-zoom-in" data-aos-delay="150">
                        <h3 className='font-raleway font-bold text-default lg:text-2xl text-lg text-start w-[100%]' data-aos="fade-right" data-aos-delay="150">Get to know me!</h3>
                        <p className="xl:text-2xl text-xl lg:max-w-[35rem] xl:max-w-none xl:w-[40rem] 2xl:w-[60rem] xxxl:w-[75rem] font-raleway text-wrap">
                            Hi there! I'm John, a passionate full-stack developer with a love for crafting engaging and user-friendly web experiences. With 2 years 
                            of experience in the tech industry, I've honed my skills in both front-end and back-end development to create seamless, robust applications.
                        </p>
                    </div>
                </div>  
                <div className="my-skills-container">
                    <h3 className='mb-5 mt-10 font-raleway font-bold text-default lg:text-2xl text-lg text-start w-[100%] lg:mt-16' data-aos="fade-right" data-aos-delay="150">My Skills</h3>
                    <div className="skil-list flex gap-x-4 flex-wrap gap-y-4 lg:gap-y-8 lg:gap-x-6">
                        <div className='skill'>HTML</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>SASS</div>
                        <div className='skill'>Tailwind</div>
                        <div className='skill'>Typescript</div>
                        <div className='skill'>Javascript</div>
                        <div className='skill'>Python</div>
                        <div className='skill'>React</div>
                        <div className='skill'>Responsive Design</div>
                        <div className='skill'>Express</div>
                        <div className='skill'>MongoDB</div>
                        <div className='skill'>Mongoose</div>
                        <div className='skill'>Redis</div>
                        <div className='skill'>REST API</div>
                        <div className='skill'>Git</div>
                        <div className='skill'>S3</div>
                    </div>
                </div>
            </div>
            <div className='my-tools-container'>
                <h3 className='mb-5 mt-10 font-raleway font-bold text-default lg:text-2xl text-lg text-start w-[100%]' data-aos="fade-right" data-aos-delay="150">My Tools</h3>
                <div className='tool-list flex gap-x-4 flex-wrap gap-y-4 lg:gap-y-8 lg:gap-x-6'>
                    <div className='tool'>VS Code</div>
                    <div className='tool'>ChatGPT</div>
                    <div className='tool'>Postman</div>
                    <div className='tool'>GitHub</div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe