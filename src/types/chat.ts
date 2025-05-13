
export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface QuickReply {
  text: string;
  message: string;
}

export const defaultQuickReplies: QuickReply[] = [
  {
    text: "Pricing",
    message: "Can you tell me about your pricing plans?"
  },
  {
    text: "Services",
    message: "What services do you offer?"
  },
  {
    text: "Portfolio",
    message: "Can I see more of your work?"
  },
  {
    text: "Contact",
    message: "I'd like to schedule a consultation."
  }
];
