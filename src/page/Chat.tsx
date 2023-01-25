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
        <div className="container">
            <h2 className="text-center">Chat</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send</button>
            </form>
            <ul className="list-group mt-3">
                {messages.map((message, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{message.author}:</strong> {message.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatView;
