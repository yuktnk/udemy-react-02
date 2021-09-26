import { Link, useHistory } from "react-router-dom";

export const Page01 = () => {
  const array = [...Array(100).keys()];
  console.log(array);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page01/detailA");

  return (
    <div>
      <h1>Page01ページ</h1>
      <Link to={{ pathname: "/page01/detailA", state: array }}>DetailA</Link>
      <br />
      <Link to="/page01/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
