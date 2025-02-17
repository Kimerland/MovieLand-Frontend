import React, { FC, useRef } from "react";
import ChatFormStyle from "../ChatForm/ChatForm.module.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

interface ChatFormProps {
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  generateBotResponse: (history: ChatMessage[]) => void;
  chatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const ChatForm: FC<ChatFormProps> = ({
  setChatHistory,
  generateBotResponse,
  chatHistory,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    setChatHistory((history) => {
      const newHistory: ChatMessage[] = [
        ...history,
        { role: "user" as const, text: userMessage },
        { role: "bot" as const, text: "Thinking..." },
      ];

      generateBotResponse(newHistory);
      return newHistory;
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={ChatFormStyle.footer_chat}>
      <form
        action=""
        className={ChatFormStyle.form_chat}
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="Message..."
          className={ChatFormStyle.input_message}
          ref={inputRef}
        />
        <button>
          <ArrowUpwardIcon sx={{ fontSize: 30, color: "#fff" }} />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
