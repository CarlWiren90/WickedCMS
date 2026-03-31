export type PostType = {
  title?: string;
  text?: string;
  imageUrl?: string;
  containImage?: boolean;
  containCTA?: boolean;
  useRoundedCorners?: boolean;
  stackContent?: "vertical" | "horizontal";
};

export type ThemeType = "cards";

export type StackContentType = "vertical" | "horizontal";
