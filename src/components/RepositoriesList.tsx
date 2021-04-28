import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories,
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(query);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading..</h3>}
      {!error &&
        !loading &&
        data.map((name, index) => <h5 key={index}>{name}</h5>)}
    </div>
  );
};

export default RepositoriesList;
