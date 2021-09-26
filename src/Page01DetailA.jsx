import { useLocation, useHistory } from "react-router-dom";

export const Page01DetailA = () => {
  const location = useLocation();
  console.log(location);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page01DetailAページ</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
