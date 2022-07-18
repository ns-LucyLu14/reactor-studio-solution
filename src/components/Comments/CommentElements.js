import styled from "styled-components";

export const GruopTimestamp = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${(props) => props.theme.margin.l};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fonts.xs};
  font-weight: 500;
  @media (min-width: 700px) {
    font-size: ${(props) => props.theme.fonts.s};
  }
`;

export const CommentsWrapper = styled.ul`
  overflow-y: scroll;
  margin: 0 auto;
  max-height: 600px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => props.theme.padding.xs};
  margin-bottom: ${(props) => props.theme.margin.l};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Header = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

export const ThemeButton = styled.div`
  width: 30px;
  height: 30px;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.bg.body};
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
`;

export const CommentWrapper = styled.li`
  position: relative;
  display: flex;
  gap: ${(props) => props.theme.spacing.s};
  @media (min-width: 700px) {
    gap: ${(props) => props.theme.spacing.m};
  }
`;

export const Image = styled.div`
  height: 30px;
  aspect-ratio: 1/1;
  background: lightgreen;
  border-radius: 50%;
  @media (min-width: 700px) {
    height: 42px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.m};
  width: 80%;
`;

export const CommentContent = styled.div`
  background: ${(props) => props.theme.bg.secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${(props) => props.theme.padding.s};
  border-radius: 8px;
  border: 1px solid #d8dee7;
  min-height: 100px;
  @media (min-width: 700px) {
    padding: ${(props) => props.theme.padding.m};
  }
`;

export const CommentAuthor = styled.p`
  font-size: ${(props) => props.theme.fonts.m};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.margin.s};
  font-weight: 600;
  @media (min-width: 700px) {
    font-size: ${(props) => props.theme.fonts.l};
  }
`;

export const CommentText = styled.p`
  font-size: ${(props) => props.theme.fonts.m};
  color: ${(props) => props.theme.colors.secondary};
  justify-content: flex-start;
  font-weight: 500;
  @media (min-width: 700px) {
    font-size: ${(props) => props.theme.fonts.l};
  }
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.s};
  font-size: ${(props) => props.theme.fonts.s};
  @media (min-width: 700px) {
    font-size: ${(props) => props.theme.fonts.m};
  }
`;

export const CommentTimestamp = styled.p`
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ReplyBadge = styled.p`
  color: ${(props) => props.theme.bg.body};
  margin-top: -2px;
  align-items: center;
  justify-content: center;
  ::before {
    content: "○";
    font-size: 15px;
    margin-right: 5px;
    margin-top: -2px;
    background: transparent;
  }
`;

export const CommentThread = styled.div`
  content: "";
  height: 28px;
  width: 18px;
  border-left: 2px solid #d8dee7;
  border-bottom: 2px solid #d8dee7;
  border-bottom-left-radius: 4px;
  transform: translateX(-150%);
  margin-bottom: -28px;
  @media (min-width: 700px) {
    transform: translateX(-180%);
    margin-bottom: -35px;
    width: 24px;
    height: 48px;
  }
`;
