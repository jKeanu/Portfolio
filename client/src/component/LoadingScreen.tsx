import { useEffect, useState } from "react";

interface LoadingScreenProps{
    isLoading: boolean;
    loadingDisplay: string;
    isInfoError: boolean;
    isProjectError: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, loadingDisplay, isInfoError, isProjectError }) => {
    const [isErrorActive, setIsErrorActive] = useState(false)

    useEffect(()=>{
        if (isInfoError || isProjectError){
            requestAnimationFrame(()=>{
                setIsErrorActive(true)
            })
        }
    }, [isInfoError, isProjectError])

    return (
        <div
            className="loading-screen loading-screen-opacity-transition h-screen w-screen fixed bg-[#12182b]"
            style={{ display: loadingDisplay, opacity: isLoading ? '1' : '0' }}
        >
            {   (isInfoError || isProjectError)&&
                <div className={`${isErrorActive?'bg-transparent bottom-[85%]':'bottom-[100%]'}
                    transition-bottom lg:text-[16px] md:text-[14px] text-[13px] text-[#f8c2c2] p-2 text-center left-[50%] 
                    translate-x-[-50%] w-fit absolute rounded-md error-fetch`}>
                    Hmm, something went wrong. My portfolio details couldn&apos;t be fetched.
                </div>
            }
            <div className="loader-wrapper">
                <div className="loader-indicator">
                    <span className="loader first_sm"></span>
                    <span className="loader second_sm"></span>
                    <span className="loader third_sm"></span>
                </div>
                <span className="indicator-text sm:text-[17px] text-sm">
                    Fetching awesomeness for you...
                </span>
            </div>
        </div>
    );
};

export default LoadingScreen;
