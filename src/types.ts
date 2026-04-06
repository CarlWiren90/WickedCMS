export type PostType = {
  title?: string;
  text?: string;
  imageUrl?: string;
  containImage?: boolean;
  containCTA?: boolean;
  useRoundedCorners?: boolean;
  cardLayout?: "default" | "poster";
  posterHeadingStyle?: "gradientBottom" | "badgeTopLeft";
  tone?: "modern" | "classic" | "playful";
  readMore?: "active" | "inactive";
  cardSize?: "small" | "medium" | "large";
};

export type ThemeType = keyof typeof import("./themes/themes").themeClasses;

export type CardLayoutType = "default" | "poster";

export type PosterHeadingStyleType = "gradientBottom" | "badgeTopLeft";

export type ToneType = "modern" | "classic" | "playful";

export type ShadowType = "shadow" | "none";

export type CardSizeType = "small" | "medium" | "large";
