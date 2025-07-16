import HeroSection from '../component/Hero';
import AboutMe from '../component/AboutMe';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Project from '../component/Project';
import { useEffect, useState } from 'react';
import LoadingScreen from '../component/LoadingScreen';
import useFetchProjects from '../hooks/useFetchProjects';
import useFetchInfo from '../hooks/useFetchInfo';

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingDisplay, setLoadingDisplay] = useState('block');
    const { projects, isProjectError } = useFetchProjects();
    const { aboutMe, isInfoError } = useFetchInfo();

    useEffect(() => {
        if (projects.length > 0 && aboutMe) {
            setTimeout(() => {
                setIsLoading(false);
                setTimeout(() => {
                    setLoadingDisplay('none'); // Once the loading screen disappears we display none
                }, 550); // Transition delay
            }, 1000); // It's 1s, so even if the fetching project data takes almost instantly,
            // the loading screen last 1s at least.
        }
    }, [projects, aboutMe]);

    return (
        <>
            <LoadingScreen isLoading={isLoading} loadingDisplay={loadingDisplay} 
                isInfoError={isInfoError} 
                isProjectError={isProjectError}/>
            {!isLoading && (
                <>
                    <HeroSection isLoading={isLoading} />
                    <main className="w-full">
                        <AboutMe aboutMe={aboutMe} />
                        <Project projects={projects} />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Page;
