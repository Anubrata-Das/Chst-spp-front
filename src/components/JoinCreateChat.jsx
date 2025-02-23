import { useState } from "react"
import ChatIcon from "../assets/chat.png"
import toast from "react-hot-toast"
import { createRoomService } from "../services/RoomService"

const JoinCreateChat = () => {

  const [detail, setDetail]=useState({
      roomId:'7686',
      userName:'kol',
  })

  function handleFormInputChange(event){
    setDetail({
      ...detail,
      [event.target.name]:event.target.value,
    })
  }

  function validateForm() {
    if(detail.roomId === "" || detail.userName === ""){
      toast.error('Invalid input !!')
      
      return false;
    }
    return true;
  }

  function joinChat(){
    if(validateForm()){
      //join chat
    }
  }

  async function createRoom(){
    if(validateForm()){
      //create Room , call api to backend
      console.log(detail);
      
      try {
        const response=await createRoomService(detail.roomId)
        console.log(response);
        toast.success("room created successfully !!")
        //join the room
        joinChat();
      } catch (error) {
        console.log(error);
        if(error.status == 400){
          toast.error("Room already exists")
        }else{
          toast.dismiss("Error in creating room !")       }
      }
      
    }
  }

 

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
        <div>
          <img src={ChatIcon} className="w-24 mx-auto"/>
        </div>
        <h1 className="text-2xl font-semibold text-center">
          Join Room / Create Room

        </h1>

        {/* name div  */}
        <div className=''>
          <label htmlFor="name" className='block font-medium mb-2'>Your Name</label>
          <input 
          onChange={handleFormInputChange}
          value={detail.userName}
          type="text" 
          id='name' 
          name='userName'
          placeholder="Enter Name"
          className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Room id div  */}
        <div className=''>
          <label htmlFor="name" className='block font-medium mb-2'>Room Id/ New Room Id</label>
          <input 
          name="roomId"
          onChange={handleFormInputChange}
          value={detail.roomId}
          type="text" 
          id='name' 
          placeholder="Enter Room Id"
          className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* button div  */}
        <div className='flex justify-start gap-3 mt-4'>
          <button onClick={joinChat} className='px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-sm'> Join Room</button>
          <button onClick={createRoom} className='px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-sm'> Create Room</button>
        </div>

      </div>      
    </div>
  )
}

export default JoinCreateChat
