import React, { ChangeEvent, useState } from "react"
import useAOS from "../customHooks/useAOS"
import axios, { AxiosResponse } from "axios"

const Contact:React.FC=()=>{
    const [formData, setFormData] = useState({name:"", email:"", message:""})
    const [messageStatus, setMessageStatus] = useState<string>('')
    const API_URL = import.meta.env.MODE === 'production'? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;
    useAOS()

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

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            const res:AxiosResponse<{status:string}> = await axios.post(`${API_URL}/contact`)
            if(res.data.status==='success'){
                setMessageStatus('Your message was successfully sent')
            }
        }catch(err){
            
        }
    }

    return (
        <section className="contact-section bg-[#090e22]">
            <h2 className="mb-12 font-bold font-raleway text-center text-3xl lg:text-4xl" data-aos="fade-right">Contact</h2>
            <form className="contact-form flex flex-col items-center w-[250px] xsm:w-[300px] sm:w-[500px] md:w-[650px] lg:w-[850px] xl:[950px] sm:p-12 p-4 rounded-md mx-auto" onSubmit={handleSubmit}>
                <div className="w-[100%] flex gap-x-4 lg:flex-row flex-col">
                    <div className="w-[100%]">
                        <label htmlFor="name" className="block text-default font-raleway my-2 text-xl">Name</label>
                        <input type="text" id="name" name="name" className="block font-raleway w-[100%] placeholder-default 
                        py-2.5 text-default focus:outline-none bg-transparent border-b-2 border-solid focus:border-[#b3c1f4d1] 
                        border-[#748fc294] border-t-0 border-l-0 border-r-0 text-lg" placeholder="Enter your name" 
                        onChange={handleChange} style={{borderBottomColor:formData.name?'#b3c1f4d1':''}}/>
                    </div>
                    <div className="w-[100%]">
                        <label htmlFor="email" className="block text-default font-raleway my-2 text-xl">Email Address</label>
                        <input type="email" id="email" name="email"className="block font-raleway w-[100%] placeholder-default 
                        py-2.5 text-default focus:outline-none bg-transparent border-b-2 border-solid focus:border-[#b3c1f4d1]  text-lg
                        border-[#748fc294] border-t-0 border-l-0 border-r-0" onChange={handleChange} style={{borderBottomColor:formData.email?'#b3c1f4d1':''}} placeholder="Enter your email address"/>
                    </div>
                </div>
                <div className="w-[100%]">
                    <label htmlFor="message" className="block text-default font-raleway my-2 text-xl">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message..." className="block font-raleway 
                    resize-none w-[100%] placeholder-default border py-2.5 h-[75px] text-default placeholder:font-raleway outline-none 
                    bg-transparent border-b-2 border-solid focus:border-[#b3c1f4d1] border-[#748fc294] border-t-0 border-l-0 border-r-0
                    text-lg"
                    onChange={handleChange} style={{borderBottomColor:formData.message?'#b3c1f4d1':''}}>
                    </textarea>
                </div>
                <div className="w-full h-40 flex items-center justify-center cursor-pointer">
    <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 
    bg-[#24293c3b] group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#24293c3b] group-hover:h-full">
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
            className="relative w-full text-left transition-colors font-raleway duration-200 ease-in-out text-[#ced4f3]">
            Launch Message
        </span>
        </div>
    </div>
            </form>
        </section>
    )
}

export default Contact