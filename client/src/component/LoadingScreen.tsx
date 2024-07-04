const LoadingScreen:React.FC<{isLoading:boolean, loadingDisplay:string}>=({isLoading, loadingDisplay})=>{
    return (
        <div className="loading-screen loading-screen-opacity-transition h-screen w-screen fixed bg-[#2c4486]" style={{display:loadingDisplay, opacity:isLoading?'1':'0'}}>
        </div>
    )
}


export default LoadingScreen