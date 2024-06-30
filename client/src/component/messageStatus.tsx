
  const MessageStatus:React.FC<{msgStatus:{active:boolean, status:string, message:string}}>=({msgStatus})=>{

    return(
        <div className="min-w-[650px] fixed bottom-[50px] text-white p-2 rounded-md text-center
            left-[50%] translate-x-[-50%]" style={{backgroundColor:`${msgStatus.status==='success'?'#349a63':'#d1513d'}`}}>
            {msgStatus.message}
        </div>
    )
}

export default MessageStatus