
import { ChatMessage } from "@/types/chat";

// Get saved chat history from localStorage
export const getSavedChatHistory = (): ChatMessage[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const savedChat = localStorage.getItem("zaploom-chat-history");
    if (savedChat) {
      return JSON.parse(savedChat);
    }
  } catch (error) {
    console.error("Error retrieving chat history:", error);
  }
  
  return [];
};

// Save chat history to localStorage
export const saveChatHistory = (chatHistory: ChatMessage[]): void => {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem("zaploom-chat-history", JSON.stringify(chatHistory));
  } catch (error) {
    console.error("Error saving chat history:", error);
  }
};

// Format timestamps in a human-readable way
export const formatTimestamp = (date: Date): string => {
  // For messages less than a minute old
  const secondsAgo = Math.floor((Date.now() - date.getTime()) / 1000);
  if (secondsAgo < 60) return "Just now";
  
  // For messages less than an hour old
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
  
  // For messages less than a day old
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  
  // For older messages, show the date
  const today = new Date().setHours(0, 0, 0, 0);
  const messageDay = new Date(date).setHours(0, 0, 0, 0);
  
  if (messageDay === today) {
    return `Today at ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  } else if (messageDay === today - 86400000) {
    return `Yesterday at ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  } else {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit' 
    });
  }
};
