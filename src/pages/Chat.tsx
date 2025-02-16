
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardContent } from "@/components/DashboardContent";

type Message = {
    id: string;
    content: string;
    role: 'user' | 'assistant';
};

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const generateResponse = async (userMessage: string) => {
        // This is a mock response - replace with actual AI integration later
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                const responses = [
                    "I understand your question. Let me help you with that.",
                    "That's an interesting point. Here's what I think...",
                    "Based on my analysis, I would recommend...",
                    "Let me break this down for you...",
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                resolve(`${randomResponse} (Responding to: ${userMessage})`);
            }, 1000);
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            content: input.trim(),
            role: 'user',
        };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        try {
            // Get AI response
            const response = await generateResponse(input.trim());
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: response,
                role: 'assistant',
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error generating response:', error);
        } finally {
            setIsTyping(false);
        }
    };

    const ChatContent = (
        <div className="flex flex-col h-full">
            <Card className="flex-grow flex flex-col">
                <CardHeader>
                    <CardTitle>AI Chat</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                    <ScrollArea className="h-full">
                        {messages.map(m => (
                            <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                                    {m.content}
                                </span>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="text-left">
                                <span className="inline-block p-2 rounded-lg bg-secondary text-secondary-foreground">
                                    AI is typing...
                                </span>
                            </div>
                        )}
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="flex-grow"
                        />
                        <Button type="submit" disabled={isTyping}>Send</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );

    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <DashboardSidebar />
                <DashboardContent>
                    {ChatContent}
                </DashboardContent>
            </div>
        </SidebarProvider>
    );
}
