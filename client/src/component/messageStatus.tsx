
  const MessageStatus:React.FC<{msgStatus:{active:boolean, status:string, message:string}}>=({msgStatus})=>{

    return(
        <div className={`msg-status w-[250px] sm:w-[450px] md:w-[500px] lg:w-[650px] 
            fixed transition-bottom lg:text-base md:text-[14px] text-[13px]
            text-white p-2 text-center left-[50%] translate-x-[-50%]`} 
            style={{backgroundColor:`${msgStatus.status==='success'?'#349a63':'#d1513d'}`, bottom:`${msgStatus.active?'45px':'-80px'}`}}>
            {msgStatus.message}{msgStatus.status==='exceeded'?'':''}
        </div>
    )
}

export default MessageStatus