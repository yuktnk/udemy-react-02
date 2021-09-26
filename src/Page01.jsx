import { Link } from "react-router-dom";

export const Page01 = () => {
  const array = [...Array(100).keys()];
  console.log(array);
  return (
    <div>
      <h1>Page01ページ</h1>
      <Link to={{ pathname: "/page01/detailA", state: array }}>DetailA</Link>
      <br />
      <Link to="/page01/detailB">DetailB</Link>
    </div>
  );
};
