import React, { useEffect, useState } from "react"
import useAOS from "../customHooks/useAOS"
import axios, { AxiosResponse } from "axios"
import MessageStatus from "./messageStatus"
import { API_URL } from "./Project"

const Contact:React.FC=()=>{
    const [formData, setFormData] = useState({name:"", email:"", message:""})
    const [messageStatus, setMessageStatus] = useState<{active: boolean, status:string, message:string}>({active:false, status:'', message:''})
    const [dots, setDots] = useState(0)
    const [isSending, setIsSending] = useState(false)
    const maxDots = 3;    useAOS()
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
        e.preventDefault()
        const {name, value} = e.target
        setFormData(prevFormData=>{
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    useEffect(()=>{
        let timeoutId: NodeJS.Timeout | undefined;
        if (messageStatus.active) {
            timeoutId = setTimeout(() => {
                setMessageStatus(prevStatus => ({
                    ...prevStatus,
                    active: false
                }));
            }, 5000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [messageStatus])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDots(prev=> (prev+1)%(maxDots+1));
        }, 350)
        return ()=> clearInterval(interval)
    }, [])

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsSending(true)
        try{
            const res:AxiosResponse<{status:string}> = await axios.post(`${API_URL}/contact`, formData)
            if(res.data.status==='success'){
                setMessageStatus({active:true, status:'success', message:'Message has been sent!'})
                setFormData({message:'', email:'', name:''})
            }
        }catch(err){
            if(axios.isAxiosError(err)){
                if(err.response?.status===429){
                    setMessageStatus({active:true, status:'exceeded', message:"Multiple messages were detected, failed to send the message."})
                }else{
                    setMessageStatus({active:true, status:'failed', message:'Failed to send the message.'})
                }
            }else{
                setMessageStatus({active:true, status:'failed', message:'Failed to send the message.'})
            }
        }
        setIsSending(false)
    }

    return (
        <section className="contact-section bg-[#090e22] flex flex-col h-fit" id="contact">
            <h1 className="font-bold font-raleway text-center text-3xl lg:text-4xl" data-aos="fade-right">Contact</h1>
                <p className="w-[250px] md:w-[470px] text-center text-base font-light mx-auto text-[#b4b7c3ab]" data-aos="fade-left">
                    Do you have something in mind or just want to say hello? Feel free to send me a message!
                </p>
            <form className="mt-[15px] contact-form flex flex-col items-center w-[250px] xsm:w-[300px] sm:w-[500px] md:w-[650px] lg:w-[850px] xl:[950px] sm:p-12 p-4 rounded-md mx-auto" onSubmit={handleSubmit}>
                <div className="w-[100%] flex gap-x-4 lg:flex-row flex-col">
                    <div className="w-[100%]">
                        <label htmlFor="name" className="block text-default font-raleway my-2 text-xl">Name</label>
                        <input type="text" id="name" name="name" required className="block font-raleway w-[100%] placeholder-default 
                        py-2.5 text-default focus:outline-none bg-transparent border-b-2 border-solid focus:border-[#b3c1f4d1] 
                        border-[#748fc294] border-t-0 border-l-0 border-r-0 text-lg" placeholder="Enter your name"  value={formData.name}
                        onChange={handleChange} style={{borderBottomColor:formData.name?'#b3c1f4d1':''}}/>
                    </div>
                    <div className="w-[100%]">
                        <label htmlFor="email" className="block text-default font-raleway my-2 text-xl">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} required className="block font-raleway w-[100%] placeholder-default 
                        py-2.5 text-default focus:outline-none bg-transparent border-b-2 border-solid focus:border-[#b3c1f4d1]  text-lg
                        border-[#748fc294] border-t-0 border-l-0 border-r-0" onChange={handleChange} style={{borderBottomColor:formData.email?'#b3c1f4d1':''}} placeholder="Enter your email address"/>
                    </div>
                </div>
                <div className="w-[100%]">
                    <label htmlFor="message" className="block text-default font-raleway my-2 text-xl">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message..." required className="block font-raleway 
                    resize-none w-[100%] placeholder-default border py-2.5 h-[75px] text-default placeholder:font-raleway outline-none 
                    bg-transparent border-b-2 border-solid focus:border-[#b3c1f4d1] border-[#748fc294] border-t-0 border-l-0 border-r-0
                    text-lg" value={formData.message}
                    onChange={handleChange} style={{borderBottomColor:formData.message?'#b3c1f4d1':''}}>
                    </textarea>
                </div>
                <div className="w-full mt-14 flex items-center justify-center">
                <button className="padding-x-transition relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 
                        bg-[#24293c3b] group min-w-[185px]" disabled={isSending} style={{pointerEvents:`${isSending?'none':'auto'}`, paddingLeft:`${isSending?'0':''}`, paddingRight:`${isSending?'0':''}`, justifyContent:`${isSending?'center':''}`}}>
                        {!isSending?<>
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#0c1b5675] group-hover:h-full">
                            </span>
                            <span
                                className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-5 h-5 stroke-default">
                                    <path
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round">
                                    </path>
                                </svg>
                            </span>
                            <span
                                className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-5 h-5 stroke-default">
                                    <path
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round">
                                    </path>
                                </svg>
                            </span>
                            <span
                                className="relative w-full text-left transition-colors font-raleway duration-200 ease-in-out text-default">
                                Send Message
                            </span>
                        </>:
                        <span
                            className="w-fit font-raleway text-default text-center font-bold">
                            Sending{'.'.repeat(dots)}
                        </span>}

                    </button>
                </div>
            </form>
            <MessageStatus msgStatus={messageStatus} />
        </section>
    )
}

export default Contact