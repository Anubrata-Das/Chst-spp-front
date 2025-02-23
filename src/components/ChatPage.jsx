
import { useRef, useState } from 'react'
import { MdAttachFile, MdSend } from 'react-icons/md'




const ChatPage = () => {

    const [messages, setMessages] = useState([
        {
            sender: "mummy",
            content:"barii ayy"
        },
        {
            sender: "Anu",
            content:"aschi"
        }
    ]);
    const [input, setInput] = useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient, setStompClient]=useState(null);
    const [roomId, setRoomId] = useState("");
    const [currentUser] = useState("Anu");

  return(
     <div >
        {/* header  */}
        <header className='flex justify-between fixed w-full px-8 py-2 items-center shadow dark:bg-gray-800'>
            {/* room name container  */}
            <div>
                <h1 className='text-xl font-semibold'>
                    Room : <span>Family Room</span>
                </h1>
            </div>
            {/* username container  */}
            <div>
                <h1 className='text-xl font-semibold'>
                    User : <span>Family Room</span>
                </h1>
            </div>
            {/* leave room  button*/}
            <div>
                <button className='dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full'>Leave Room</button>
            </div>
        </header>

        {/* main content  */}
        <main className='py-20 px-10 h-screen overflow-auto w-3/4 dark:bg-slate-500 mx-auto'>
            {messages.map((message, index)=>(
                <div key={index} className={`flex ${message.sender===currentUser?'justify-end':'justify-start'} `}>
                    <div  className={`my-2 ${message.sender===currentUser?'bg-purple-900':'bg-green-900'} p-2 rounded max-w-xs`}>
                        <div className='flex flex-row gap-2'>
                            <img className='w-10 h-10' src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png" alt="" srcset="" />
                            <div className=" flex flex-col gap-1">
                                <p className='text-sm font-bold'>{message.sender}</p>
                                <p>{message.content}</p>
                            </div>
                        </div>

                    </div>
                </div>
            ))}

        </main>

        {/* input message container  */}
        <div className='fixed bottom-10 w-full h-16 rounded-full '>
            <div className='h-full dark:bg-gray-800 w-2/3 mx-auto flex justify-between items-center gap-4 rounded-full' >
                <input type="text" placeholder='Type here ...' className='dark:bg-gray-700 dark:border-gray-700 px-3 py-2 rounded-full h-full w-full' />
                <div className='flex justify-center items-center gap-2 px-2'>
                    <button className='dark:bg-orange-700 px-3 py-2 rounded-full h-10 w-10 flex justify-center items-center'><MdAttachFile /></button>
                    <button className='dark:bg-green-700 px-3 py-2 rounded-full h-10 w-10 flex justify-center items-center'><MdSend /></button>
                </div>
            </div>
        </div>
  </div>
  )
}

export default ChatPage
