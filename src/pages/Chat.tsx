'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [isTyping, setIsTyping] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsTyping(true);
        try {
            await handleSubmit(e);
        } catch (error) {
            console.error('Error submitting message:', error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
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
                    <form onSubmit={onSubmit} className="flex w-full space-x-2">
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
}