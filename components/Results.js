import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="mx-5 py-5 sm:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
      
    </FlipMove>
  );
}

export default Results;
