import React from "react";
import MessagesStyle from "../MessagesContent/MessagesContent.module.scss";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const MessagesContent = () => {
  return (
    <div className={MessagesStyle.wrapper_chat}>
      <div className={MessagesStyle.container_chat}>
        <div className={MessagesStyle.header_chat}>
          <div className={MessagesStyle.header_info}>
            <SmartToyIcon className={MessagesStyle.header_icon} />
            <h2 className={MessagesStyle.logo_text}>Chatbot</h2>
          </div>
        </div>

        <div className={MessagesStyle.body_chat}>
          <div className={MessagesStyle.bot_message}>
            <SmartToyIcon />
            <p className={MessagesStyle.bot_text}>What can I help with?</p>
          </div>
        </div>

        <div className={MessagesStyle.footer_chat}>
          <form action="" className={MessagesStyle.form_chat}>
            <input
              type="text"
              placeholder="Message..."
              className={MessagesStyle.input_message}
            />
            <button>
              <ArrowUpwardIcon sx={{ fontSize: 30, color: "#fff" }} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessagesContent;
