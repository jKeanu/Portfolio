const LoadingScreen:React.FC<{isLoading:boolean, loadingDisplay:string}>=({isLoading, loadingDisplay})=>{
    return (
        <div className="loading-screen-opacity-transition h-screen w-screen fixed bg-slate-600 z-10" style={{display:loadingDisplay, opacity:isLoading?'1':'0'}}>
            <div className="load-screen-loading-container">
                <div className="load-screen-loader">
                    <div className="load-screen-loader-shadow">
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoadingScreen