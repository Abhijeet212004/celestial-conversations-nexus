
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Satellite, Earth, Moon, Sun } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "🚀 Greetings from ISRO Mission Control! I'm your space exploration assistant. How can I help you explore the cosmos today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "🛰️ ISRO has successfully launched over 100+ satellites to date, showcasing India's prowess in space technology!",
    "🌍 Did you know that ISRO's Mars Orbiter Mission (Mangalyaan) made India the first country to reach Mars in its first attempt?",
    "🚀 Chandrayaan missions have revolutionized our understanding of the Moon's composition and water presence!",
    "⭐ ISRO's cost-effective approach to space missions has inspired space agencies worldwide!",
    "🛸 Our upcoming Gaganyaan mission will make India the fourth country to send humans to space independently!",
    "🌌 ISRO's PSLV (Polar Satellite Launch Vehicle) is known for its reliability and has completed 50+ successful missions!",
    "🔭 The Astrosat, India's first dedicated astronomy satellite, continues to make groundbreaking discoveries!",
    "🌟 ISRO's navigation system NavIC provides accurate positioning services across India and surrounding regions!"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-lg border-primary/20 space-glow">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <Satellite className="w-8 h-8 text-primary satellite-float" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gradient">ISRO Chat Assistant</h2>
            <p className="text-sm text-muted-foreground">Your gateway to space exploration</p>
          </div>
        </div>
        
        <ScrollArea className="h-96 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-4'
                      : 'bg-secondary/80 text-secondary-foreground mr-4'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Earth className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-primary">ISRO Bot</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary/80 text-secondary-foreground rounded-2xl px-4 py-3 mr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Earth className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">ISRO Bot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">Analyzing data...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex gap-3 mt-6">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about ISRO missions, satellites, or space exploration..."
            className="flex-1 bg-input/50 border-primary/30 focus:border-primary/60 text-foreground placeholder:text-muted-foreground"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-primary hover:bg-primary/90 text-primary-foreground space-glow"
          >
            <Satellite className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
            <span>Mission Control Online</span>
          </div>
          <div className="flex items-center gap-1">
            <Moon className="w-3 h-3" />
            <span>Lunar Operations Active</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatBot;
