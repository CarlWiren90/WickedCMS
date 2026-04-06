import { cn } from "../utils/cn";
import type {
  PostType,
  ThemeType,
  CardLayoutType,
  PosterHeadingStyleType,
  ToneType,
  ShadowType,
  CardSizeType,
} from "../types";
import { getThemeConfig } from "../themes/themes";

interface IWickedCMSPost {
  post: PostType;
  theme: ThemeType;
  cardLayout?: CardLayoutType;
  posterHeadingStyle?: PosterHeadingStyleType;
  tone?: ToneType;
  shadow?: ShadowType;
  cardSize?: CardSizeType;
}

const WickedCMSPost = ({
  post,
  theme,
  cardLayout,
  posterHeadingStyle,
  tone,
  shadow,
  cardSize,
}: IWickedCMSPost) => {
  const { title, text, imageUrl } = post;
  const themeConfig = getThemeConfig(theme);
  const activeLayout = cardLayout || "default";
  const isPosterLayout = activeLayout === "poster";
  const activePosterHeadingStyle = posterHeadingStyle || "gradientBottom";

  return (
    <section
      className={cn(
        themeConfig.card,
        themeConfig.cardLayout[activeLayout],
        themeConfig.tone[tone || "modern"],
        themeConfig.shadow[shadow || "shadow"],
        themeConfig.cardSize[cardSize || "medium"],
      )}
    >
      {isPosterLayout ? (
        <>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <section
            className={cn(
              themeConfig.posterHeadingStyle[activePosterHeadingStyle].wrapper,
            )}
          >
            <h2
              className={cn(
                themeConfig.posterHeadingStyle[activePosterHeadingStyle].title,
              )}
            >
              {title}
            </h2>
          </section>
        </>
      ) : (
        <>
          <section className="overflow-hidden w-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover max-h-64"
            />
          </section>
          <section className="px-3 py-3 w-full">
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{text}</p>
          </section>
        </>
      )}
    </section>
  );
};

export default WickedCMSPost;
