import "./ChatWindow.css";
import Chat from "./Chat";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function ChatWindow() {
    const { prompt, setPrompt, setReply, currThreadId, setPrevChats, setNewChat } = useContext(MyContext);

    const handleSend = async () => {
        if (!prompt) return;

        try {
            setPrevChats(prev => [...prev, { role: "user", content: prompt }]);
            setNewChat(false);
            const currentPrompt = prompt;
            setPrompt("");

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ threadId: currThreadId, message: currentPrompt })
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
            <div className="navbar">
                <span>Sam's GPT</span>
                <div className="userIconDiv">
                    <div className="userIcon">S</div>
                </div>
            </div>

            <div className="main-chat">
                <Chat />
            </div>

            <div className="chatInput">
                <div className="inputBox">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask anything..."
                    />
                    <button id="submit" onClick={handleSend}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
                {/* ADDED MISSING INFO TEXT */}
                <p className="info">Sam's GPT can make mistakes. Check important info.</p>
            </div>
        </section>
    );
}

export default ChatWindow;
