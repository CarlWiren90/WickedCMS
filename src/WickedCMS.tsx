import type { PostType } from "./types";
import type { ThemeType } from "./types";
import type { StackContentType } from "./types";
import WickedCMSPost from "./components/WickedCMSPost";
import { themeClasses } from "./themes/themes";
import { cn } from "./utils/cn";

interface IWickedCMS {
  content: PostType[];
  theme: ThemeType;
  stackContent?: StackContentType;
}

const WickedCMS = ({ content, theme, stackContent }: IWickedCMS) => {
  return (
    <section className={cn(themeClasses[theme].parentContainerLayout.layout)}>
      {content.map((post) => {
        const { title, text, imageUrl } = post;
        return (
          <WickedCMSPost
            theme={theme}
            stackContent={stackContent}
            post={{ title, text, imageUrl }}
          />
        );
      })}
    </section>
  );
};

export default WickedCMS;
