
  const MessageStatus:React.FC<{msgStatus:{active:boolean, status:string, message:string}, notifDisplay:string}>=({msgStatus, notifDisplay})=>{

    return(
        <div className={`msg-status ${msgStatus.active?'msg-status-active':'msg-status-inactive'}
            w-[250px] sm:w-[450px] md:w-[500px] lg:w-[650px] 
            fixed transition-bottom lg:text-base md:text-[14px] text-[13px]
            text-white p-2 text-center left-[50%] translate-x-[-50%]`} role={msgStatus.active?'alert':'undefined'}
            style={{backgroundColor: msgStatus.status==='success'?'#349a63':'#d1513d', bottom:`${msgStatus.active?'45px':'-80px'}`, display:notifDisplay}}>
            {msgStatus.message}{msgStatus.status==='exceeded'?'':''}
        </div>
    )
}

export default MessageStatus