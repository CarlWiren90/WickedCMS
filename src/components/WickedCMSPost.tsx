import { cn } from "../utils/cn";
import type { PostType } from "../types";
import type { ThemeType } from "../types";
import type { StackContentType } from "../types";
import { themeClasses } from "../themes/themes";

interface IWickedCMSPost {
  post: PostType;
  theme: ThemeType;
  stackContent?: StackContentType;
}

const WickedCMSPost = ({ post, theme, stackContent }: IWickedCMSPost) => {
  const { title, text, imageUrl } = post;

  return (
    <section
      className={cn(
        themeClasses[theme].cardsStyling,
        themeClasses[theme].stackContent[stackContent || "vertical"],
      )}
    >
      <h2 className="font-bold">{title}</h2>
      <p>{text}</p>
      <img src={imageUrl} alt={title} className="w-76" />
    </section>
  );
};

export default WickedCMSPost;
