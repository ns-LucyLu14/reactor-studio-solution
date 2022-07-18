import React from "react";
import {
  ButtonText,
  CommentInput,
  FormContainer,
  MediaBtn,
  SendButton,
  SendIcon,
} from "./ReplyFormElements";
import { PaperAirplaneIcon } from "@heroicons/react/outline";

const ReplyForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormContainer>
        <MediaBtn>+</MediaBtn>
        <CommentInput type="text" placeholder="Enter comment..." />
        <SendButton type="submit">
          <SendIcon>
            <PaperAirplaneIcon />
          </SendIcon>
          <ButtonText>Send Message</ButtonText>
        </SendButton>
      </FormContainer>
    </form>
  );
};

export default ReplyForm;
