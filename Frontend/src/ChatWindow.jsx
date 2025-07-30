/* eslint-disable no-unused-vars */
import "./ChatWindow.css";
import Chat from "./Chat";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import { v1 as uuidv1 } from "uuid";

function ChatWindow() {
    const { prompt, setPrompt, setReply, currThreadId, setPrevChats, setNewChat } = useContext(MyContext);

    const handleSend = async () => {
        if (!prompt) return;

        try {
            // Update the state to show the user's message immediately
            setPrevChats(prev => [...prev, { role: "user", content: prompt }]);
            setNewChat(false);
            const currentPrompt = prompt;
            setPrompt(""); // Clear the input field

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    threadId: currThreadId,
                    message: currentPrompt
                })
            });

            const data = await response.json();
            setReply(data.reply);
            setPrevChats(prev => [...prev, { role: "assistant", content: data.reply }]);

        } catch (err) {
            console.log(err);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <section className="chat-window">
            <div className="main-chat">
                <Chat />
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Message Sam's GPT..."
                />
                <button onClick={handleSend}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </section>
    );
}

export default ChatWindow;
