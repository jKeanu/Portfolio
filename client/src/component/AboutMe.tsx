import 'aos/dist/aos.css'; // Import the CSS
import useAOS from '../hooks/useAOS';
import { type myInfo } from '../types/myInfoTypes';

interface AboutMeProps {
    aboutMe: myInfo | null;
}

const AboutMe: React.FC<AboutMeProps> = ({ aboutMe }) => {
    useAOS();

    return (
        <section className="about-me-section bg-[#0b0f2f]" id="about-me">
            <h2 className="section-header" data-aos="fade-right">
                About
            </h2>
            {aboutMe && (
                <div className="about-me-container">
                    <div className="about-me-info-container flex justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:gap-x-12 lg:gap-y-0 gap-y-10">
                        <div
                            className="my-image-container flex-1 flex justify-center"
                            data-aos="fade-zoom-in"
                            data-aos-delay="150"
                        >
                            <img
                                src={aboutMe.image}
                                className="h-[225px] w-[225px] lg:h-[250px] lg:w-[250px] lg:min-w-[250px] xl:h-[325px] xl:w-[325px]
              object-cover rounded-2xl"
                                alt="my-photo"
                            />
                        </div>
                        <div
                            className="my-info-container flex justify-center items-center flex-col gap-y-6"
                            data-aos="fade-zoom-in"
                            data-aos-delay="150"
                        >
                            <h3
                                className="font-raleway font-bold text-default lg:text-2xl text-lg text-start w-[100%]"
                                data-aos="fade-right"
                                data-aos-delay="150"
                            >
                                Get to know me!
                            </h3>
                            <p className="xl:text-2xl text-xl lg:max-w-[35rem] xl:max-w-none xl:w-[40rem] 2xl:w-[60rem] xxxl:w-[75rem] font-raleway text-wrap">
                                {aboutMe.information}
                            </p>
                        </div>
                    </div>
                    <div className="my-skills-container">
                        <h3
                            className="mb-5 mt-10 font-raleway font-bold text-default lg:text-2xl text-lg text-start w-[100%] lg:mt-16"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >
                            My Skills
                        </h3>
                        <ul className="skil-list flex gap-x-4 flex-wrap gap-y-4 lg:gap-y-8 lg:gap-x-5">
                            {aboutMe.skills.map((skill, i) => {
                                return (
                                    <li className="skill" key={i}>
                                        {skill}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="my-tools-container">
                        <h3
                            className="mb-5 mt-10 font-raleway font-bold text-default lg:text-2xl text-lg text-start w-[100%]"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >
                            My Tools
                        </h3>
                        <ul className="tool-list flex gap-x-4 flex-wrap gap-y-4 lg:gap-y-8 lg:gap-x-5">
                            {aboutMe.tools.map((tool, i) => {
                                return (
                                    <li className="tool" key={i}>
                                        {tool}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutMe;
