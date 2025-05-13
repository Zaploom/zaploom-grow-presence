
import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChatMessage, QuickReply, defaultQuickReplies } from "@/types/chat";
import { getSavedChatHistory, saveChatHistory, formatTimestamp } from "@/lib/chatUtils";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize chat history from localStorage, or use default message
  useEffect(() => {
    const savedHistory = getSavedChatHistory();
    if (savedHistory.length > 0) {
      setChatHistory(savedHistory.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })));
    } else {
      const initialMessage: ChatMessage = {
        sender: "bot",
        text: "Hi there! How can I help you with your web development project today?",
        timestamp: new Date()
      };
      setChatHistory([initialMessage]);
      saveChatHistory([initialMessage]);
    }
  }, []);
  
  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      saveChatHistory(chatHistory);
    }
  }, [chatHistory]);
  
  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (text: string) => {
    if (text.trim()) {
      // Add user message
      const userMessage: ChatMessage = {
        sender: "user",
        text: text.trim(),
        timestamp: new Date()
      };
      
      setChatHistory(prev => [...prev, userMessage]);
      setMessage("");
      
      // Show typing indicator
      setIsTyping(true);
      
      // Simulate response after a short delay
      setTimeout(() => {
        setIsTyping(false);
        
        const botMessage: ChatMessage = {
          sender: "bot",
          text: "Thanks for your message! One of our team members will get back to you shortly. In the meantime, feel free to check out our services or portfolio.",
          timestamp: new Date()
        };
        
        setChatHistory(prev => [...prev, botMessage]);
      }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds for more natural feel
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(message);
  };
  
  const handleQuickReply = (quickReply: QuickReply) => {
    sendMessage(quickReply.message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 md:w-96 overflow-hidden animate-fade-in" 
          style={{ height: "500px", maxHeight: "80vh" }}
        >
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
          
          <div className="p-4 h-[350px] overflow-y-auto flex flex-col gap-3">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                    <AvatarImage src="/lovable-uploads/69c11995-2fc1-4bdb-a9e1-b01229d45d2e.png" alt="Zaploom" />
                    <AvatarFallback className="bg-zaploom text-white">Z</AvatarFallback>
                  </Avatar>
                )}
                
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    msg.sender === "user"
                      ? "bg-zaploom text-white rounded-br-none"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                  )}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className={cn(
                    "text-xs mt-1 block",
                    msg.sender === "user" 
                      ? "text-white/70" 
                      : "text-gray-500 dark:text-gray-400"
                  )}>
                    {formatTimestamp(msg.timestamp)}
                  </span>
                </div>
                
                {msg.sender === "user" && (
                  <Avatar className="h-8 w-8 ml-2 mt-1 flex-shrink-0">
                    <AvatarFallback className="bg-gray-300 dark:bg-gray-600 text-zaploom">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                  <AvatarImage src="/lovable-uploads/69c11995-2fc1-4bdb-a9e1-b01229d45d2e.png" alt="Zaploom" />
                  <AvatarFallback className="bg-zaploom text-white">Z</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messageEndRef} />
          </div>
          
          {/* Quick Replies */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
            {defaultQuickReplies.map((quickReply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(quickReply)}
                className="text-xs px-3 py-1 bg-zaploom/10 dark:bg-zaploom/20 hover:bg-zaploom/20 dark:hover:bg-zaploom/30 text-zaploom rounded-full transition-colors"
              >
                {quickReply.text}
              </button>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
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
