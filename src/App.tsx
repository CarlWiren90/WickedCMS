import "./App.css";
import WickedCMS from "./WickedCMS";
import { content } from "./utils/storage";

function App() {
  return (
    <>
      <WickedCMS
        theme="cards"
        cardLayout="poster"
        posterHeadingStyle="badgeTopLeft"
        tone="modern"
        shadow="shadow"
        cardSize="medium"
        content={content}
      />
    </>
  );
}

export default App;
