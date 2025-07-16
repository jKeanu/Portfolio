import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
    useEffect(() => {
        // Initialize AOS with provided options or default values
        AOS.init({
            duration: 1000,
            once: true,
        });
        // This function will run when the component unmounts
        return () => {
            AOS.refresh();
        };
    }, []);
};

export default useAOS;
