import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import useAuth from "../../hooks/useAuth";

type ChatItemType = {
  content: string;
  role: "user" | "assistant";
}

function extractCodeFromString(message: string ) {
  if (message.includes("```")) {
    const blocks = message.split("```")

    return blocks
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}

const ChatItem = ({ role, content }: ChatItemType) => {
  const messageBlockCode = extractCodeFromString(content)
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
        {!messageBlockCode && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}

        {messageBlockCode && 
          messageBlockCode?.length &&
          messageBlockCode?.map((block: string) => (
            isCodeBlock(block) ?  (
              <SyntaxHighlighter style={coldarkDark} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
            )
          ))
        }
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
        {!messageBlockCode && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}

        {messageBlockCode && 
          messageBlockCode?.length &&
          messageBlockCode?.map((block: string) => (
            isCodeBlock(block) ?  (
              <SyntaxHighlighter style={coldarkDark} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
            )
          ))
        }
      </Box>
    </Box>
  );
};

export default ChatItem
