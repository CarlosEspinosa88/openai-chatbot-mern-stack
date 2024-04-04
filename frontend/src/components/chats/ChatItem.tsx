import React from "react";
import { Box, Avatar, 
  Typography 
} from "@mui/material";
import useAuth from "../../hooks/useAuth";

type ChatItemType = {
  content: string;
  role: "user" | "assistant";
}

const ChatItem = ({ role, content }: ChatItemType) => {
  const auth = useAuth();

  return role == "assistant" ? (
    <Box
      sx={{
        p: 2,
        my: 1,
        gap: 2,
        borderRadius: 2,
        display: "flex",
        bgcolor: "#004d5612",
      }}
    >
      <Avatar sx={{ ml: "0" }}>
        <img src="logo-chatgp3.png" alt="openai" width={"30px"} />
      </Avatar>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        p: 2,
        gap: 2,
        my: 1,
        borderRadius: 2,
        display: "flex",
        bgcolor: "#004d56",
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        {auth?.user?.name?.[0].toUpperCase()}
        {auth?.user?.name?.split?.(" ")?.[1]?.[0]}
      </Avatar>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem
