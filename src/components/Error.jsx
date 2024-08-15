import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h2>Oops!! Something went wrong!</h2>
      <h4>{err.data}</h4>
    </>
  );
};

export default Error;
