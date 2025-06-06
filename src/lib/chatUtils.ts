
import { ChatMessage } from "@/types/chat";
import emailjs from '@emailjs/browser';

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

// Convert chat history to a formatted text transcript
export const formatChatTranscript = (chatHistory: ChatMessage[]): string => {
  return chatHistory.map(msg => {
    const sender = msg.sender === 'user' ? 'You' : 'Zaploom Support';
    const time = formatTimestamp(new Date(msg.timestamp));
    return `${sender} (${time}):\n${msg.text}\n`;
  }).join('\n');
};

// Send email with chat transcript using EmailJS
export const sendChatTranscript = async (
  email: string, 
  chatHistory: ChatMessage[]
): Promise<boolean> => {
  try {
    const transcript = formatChatTranscript(chatHistory);
    
    const templateParams = {
      to_email: email,
      message: transcript,
      from_name: 'Zaploom Support',
    };
    
    await emailjs.send(
      'service_placeholder', // Replace with your EmailJS service ID
      'template_placeholder', // Replace with your EmailJS template ID
      templateParams,
      'public_key_placeholder' // Replace with your EmailJS public key
    );
    
    return true;
  } catch (error) {
    console.error("Error sending email transcript:", error);
    return false;
  }
};

// Instead of returning JSX, we return information about the links in the text
// that the component can use to render links properly
export interface LinkInfo {
  type: 'text' | 'link';
  content: string;
  url?: string;
}

// Parse text for URLs and identify link segments
export const parseTextWithLinks = (text: string): LinkInfo[] => {
  // URL regex pattern
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // If no URLs in the text, return it as single text segment
  if (!text.match(urlRegex)) {
    return [{ type: 'text', content: text }];
  }
  
  // Split the text by URLs
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex) || [];
  
  const result: LinkInfo[] = [];
  
  // Interleave text and link segments
  parts.forEach((part, index) => {
    if (part) {
      result.push({ type: 'text', content: part });
    }
    if (matches[index]) {
      result.push({ 
        type: 'link', 
        content: matches[index],
        url: matches[index]
      });
    }
  });
  
  return result;
};
