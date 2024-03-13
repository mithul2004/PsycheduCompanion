"use client"
import {ChatRequestOptions} from "ai";
//events from react
import { ChangeEvent, FormEvent } from "react";
//components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//lucid
import { SendHorizonal } from "lucide-react";


interface ChatFormProps{
    input:string;
    handleInputChange:(e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)=>void;
    onSubmit:(e:FormEvent<HTMLFormElement>,chatRequestOptions?:ChatRequestOptions
        | undefined)=>void;
    isLoading:boolean;
}
export const ChatForm = ({
    input,
    handleInputChange,
    onSubmit,
    isLoading
}:ChatFormProps) => {
    return ( 
        <form 
            onSubmit={onSubmit}
            className="border-t border-primary/10 py-4 flex items-center gap-x-2"
        >
            <Input
                disabled={isLoading}
                value={input}
                onChange={handleInputChange}
                placeholder="Type message..."
                className="rounded-lg bg-primary/10"
            />
            <Button disabled={isLoading} variant="ghost">
                <SendHorizonal className="h-6 w-6"/>
            </Button>

        </form>
     );
}
 
