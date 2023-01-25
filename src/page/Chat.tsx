import React, { useState } from 'react';

interface Message {
    author: string;
    message: string;
}

const ChatView: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages([...messages, { author: 'You', message: newMessage }]);
        setNewMessage('');
    };

    return (
        <div>
            <h2>Chat</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <strong>{message.author}:</strong> {message.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatView;
