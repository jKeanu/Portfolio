const LoadingScreen:React.FC<{isLoading:boolean, loadingDisplay:string}>=({isLoading, loadingDisplay})=>{
    return (
        <div className="loading-screen loading-screen-opacity-transition h-screen w-screen fixed bg-[#12182b]" 
            style={{display:loadingDisplay, opacity:isLoading?'1':'0'}}>
            <div className="loader-wrapper">
                <div className="loader-indicator">
                    <span className="loader first_sm"></span>
                    <span className="loader second_sm"></span>
                    <span className="loader third_sm"></span>
                </div>   
                <span className="indicator-text sm:text-[17px] text-sm">Fetching awesomeness for you...</span>
            </div>
        </div>
    )
}


export default LoadingScreen