import { Link } from "react-router-dom";

export const Page01 = () => {
  return (
    <div>
      <h1>Page01ページ</h1>
      <Link to="/page01/detailA">DetailA</Link>
      <br />
      <Link to="/page01/detailB">DetailB</Link>
    </div>
  );
};
