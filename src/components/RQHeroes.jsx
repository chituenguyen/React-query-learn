import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from 'react-router-dom'

const RQHeroes = () => {
  const onSuccess = (data) => {
    console.log("fetching data successfully", data);
  };
  const onError = (err) => {
    console.log("error fetching data", err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onError, onSuccess);
  console.log(isLoading, isFetching);
  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h1>RQHeroes</h1>
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })} */}
      {data?.map((hero, index) => {
        // return <div key={index+1}>{hero}</div>;
        return (
          <div key={index + 1}>
            <Link to={`/rq-super-heroes/${index + 1}`}>
              {hero}
            </Link>
          </div>
        );
      })}
      <button onClick={() => refetch()}>Fetch data</button>
    </>
  );
};

export default RQHeroes;
