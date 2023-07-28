
import React, { useState } from 'react'

export default function BookForm({data}) {
  const [movieName,setMovieName] =useState("")
  const [name,setName] =useState("")
  const [number,setNumber] =useState("")
  const [city,setCity] =useState("")
  const [id,setId] =useState("")
  const [button,setButton] = useState("Submit")
  
const handleSubmit = (e)=>{
  e.preventDefault()
  setButton("Submited")
  setMovieName(data.data)
  setId(data.id)
  const date ={
    name,
    number,
city,
id,
movieName
  }
  localStorage.setItem("userData",JSON.stringify(date)
)}


  return (
    <div>
    <form className="m-4  max-w-lg" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-pink-900 text-xs font-bold mb-2" >
        Movie name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" value={data.data} />
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-pink-900 text-xs font-bold mb-2" >
        Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="enter your name" onChange={(e)=>{
        setName(e.target.value)
      }} required/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-pink-900 text-xs font-bold mb-2" >
    Phone number
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-pink-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="number"
        onChange={(e)=>{
          setNumber(e.target.value)
        }}
        required/>
     
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-pink-900 text-xs font-bold mb-2" >
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-pink-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Albuquerque" onChange={(e)=>{
        setCity(e.target.value)
      }} required/>
    </div>
    
  
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-pink-900 text-xs font-bold mb-2">
        Your Id
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="number" value={data.id} />
    </div>
  </div>
  <div className='flex justify-center'>
  <button className='hover:text-white hover:bg-pink-900 mt-6 p-2 rounded-t-2xl border-solid bg-purple-200' type='submit' onClick={()=> handleSubmit}>{button}</button>
</div></form>
    </div>
  )
}
