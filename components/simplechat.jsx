'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SimpleChat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (message === null || message.trim() === '') {
      // handle the case when message is null or empty
      return;
    }

    const res = await fetch(`/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: [{ role: 'user', content: message }] }),
    });

    if (res.ok) {
      try {
        const data = await res.json();
        setResponse(data.message);
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    } else {
      console.error('Server responded with status:', res.status);
    }
  };


  return (
      <div key="1" className="bg-gray-950 min-h-screen p-6 text-white font-sans ">
        <div className="max-w-2xl mx-auto fixed bottom-0 left-0 right-0 m-6">
          <h1 className="text-3xl font-medium text-center">Chat with Madhukar's Digital Twin!</h1>
          <p className="mt-4 text-gray-400 text-center">
            This is an evolving AI model that has my knowledge and personality.
            <br />
            You can use this to ask questions about marketing, PLG, tech stack, and more.
          </p>
          <div id="response"></div>
          <form onSubmit={handleSubmit} className="mt-6 flex items-center rounded-full bg-[#333] px-4 py-3">
            <Input
                className="bg-transparent flex-1 placeholder-gray-400"
                placeholder="Send a message."
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-transparent">
              <PlaneIcon className="text-gray-400 ml-2 h-5 w-5"/>
            </button>
          </form>
          <p className="mt-4">{response}</p>
        </div>
      </div>
  );
}

function PlaneIcon(props) {
  return (
      (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>)
  );
}


function PlusCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>)
  );
}
