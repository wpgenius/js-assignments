import { useParams } from "react-router-dom";

function Content() {
  const { contentId } = useParams();
  return (
    <div>
      <h1>Content {contentId}</h1>
    </div>
  );
}

export default Content;
