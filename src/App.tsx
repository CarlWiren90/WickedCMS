import "./App.css";
import WickedCMS from "./WickedCMS";
import { content } from "./utils/storage";

function App() {
  return (
    <>
      <WickedCMS theme="cards" stackContent="vertical" content={content} />
    </>
  );
}

export default App;
