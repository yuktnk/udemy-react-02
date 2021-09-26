import { useLocation } from "react-router-dom";
export const Page01DetailA = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Page01DetailAページ</h1>
    </div>
  );
};
