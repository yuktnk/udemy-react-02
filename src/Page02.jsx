import { Link } from "react-router-dom";

export const Page02 = () => {
  return (
    <div>
      <h1>Page02ページ</h1>
      <Link to="page02/999">URL Parameter</Link>
      <br />
      <Link to="page02/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
