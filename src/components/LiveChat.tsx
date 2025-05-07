
import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{sender: string; text: string; time: string}[]>([
    {
      sender: "bot",
      text: "Hi there! How can I help you with your web development project today?",
      time: "Just now"
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      // Add user message
      setChatHistory([
        ...chatHistory,
        {
          sender: "user",
          text: message,
          time: "Just now"
        }
      ]);
      
      setMessage("");
      
      // Simulate response after a short delay
      setTimeout(() => {
        setChatHistory(prev => [
          ...prev,
          {
            sender: "bot",
            text: "Thanks for your message! One of our team members will get back to you shortly. In the meantime, feel free to check out our services or portfolio.",
            time: "Just now"
          }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 md:w-96 overflow-hidden animate-fade-in" 
             style={{ height: "400px", maxHeight: "80vh" }}>
          <div className="bg-zaploom text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Chat with Zaploom</h3>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 h-[290px] overflow-y-auto flex flex-col gap-3">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-zaploom/10 dark:bg-zaploom/20 text-gray-800 dark:text-white rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zaploom"
                placeholder="Type your message..."
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-zaploom hover:bg-zaploom-light text-white rounded-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="bg-zaploom hover:bg-zaploom-light text-white rounded-full h-14 w-14 shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default LiveChat;
