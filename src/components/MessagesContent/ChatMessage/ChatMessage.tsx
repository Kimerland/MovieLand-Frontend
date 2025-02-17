import React from "react";
import ChatStyle from "../ChatMessage/ChatMessage.module.scss";
import SmartToyIcon from "@mui/icons-material/SmartToy";

interface ChatMessageProps {
  chat: {
    role: "user" | "bot";
    text: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  return (
    <div
      className={`${ChatStyle.user_message} ${
        chat.role === "bot" ? ChatStyle.bot_message : ChatStyle.user_message
      }`}
    >
      {chat.role === "bot" && <SmartToyIcon className={ChatStyle.bot_icon} />}

      <p className={ChatStyle.message_text}>{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
