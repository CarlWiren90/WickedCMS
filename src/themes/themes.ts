export const themeClasses = {
  cards: {
    container: "flex flex-wrap gap-6",
    card: "text-color-black bg-color-white",
    cardSize: {
      small: "w-full max-w-[20rem]",
      medium: "w-full max-w-[31rem]",
      large: "w-full max-w-[42rem]",
    },
    cardLayout: {
      default: "flex flex-col gap-4",
      poster: "relative aspect-square overflow-hidden",
    },
    tone: {
      modern: "tone-modern",
      classic: "tone-classic",
      playful: "tone-playful",
    },
    posterHeadingStyle: {
      gradientBottom: {
        wrapper:
          "absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/75 to-transparent",
        title: "font-bold text-xl text-white",
      },
      badgeTopLeft: {
        wrapper:
          "absolute top-3 left-3 px-3 py-2 rounded-md bg-black/70 backdrop-blur-sm",
        title: "font-bold text-base text-white leading-tight",
      },
    },
    shadow: {
      shadow: "shadow-md",
      none: "shadow-none",
    },
  },
} as const;

export const DEFAULT_THEME = "cards" as const;

export const getThemeConfig = (theme: string) => {
  return (
    themeClasses[theme as keyof typeof themeClasses] ??
    themeClasses[DEFAULT_THEME]
  );
};
