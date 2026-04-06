import type {
  PostType,
  ThemeType,
  CardLayoutType,
  PosterHeadingStyleType,
  ToneType,
  ShadowType,
  CardSizeType,
} from "./types";
import WickedCMSPost from "./components/WickedCMSPost";
import { getThemeConfig } from "./themes/themes";
import { cn } from "./utils/cn";

interface IWickedCMS {
  content: PostType[];
  theme: ThemeType;
  cardLayout?: CardLayoutType;
  posterHeadingStyle?: PosterHeadingStyleType;
  tone?: ToneType;
  shadow?: ShadowType;
  cardSize?: CardSizeType;
}

const WickedCMS = ({
  content,
  theme,
  cardLayout,
  posterHeadingStyle,
  tone,
  shadow,
  cardSize,
}: IWickedCMS) => {
  const themeConfig = getThemeConfig(theme);

  return (
    <section className={cn(themeConfig.container)}>
      {content.map((post) => {
        const { title, text, imageUrl } = post;
        return (
          <WickedCMSPost
            theme={theme}
            cardLayout={cardLayout}
            posterHeadingStyle={posterHeadingStyle}
            tone={tone}
            post={{ title, text, imageUrl }}
            shadow={shadow}
            cardSize={cardSize}
          />
        );
      })}
    </section>
  );
};

export default WickedCMS;
