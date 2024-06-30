import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../useSearch";

const UserSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const { results, totalCount, loading, error } = useSearch(
    "users",
    searchQuery
  );

  console.log(results, totalCount);

  return (
    <div>
      <ul>
        {results.map((item) => (
          <li>{item.login}</li>
        ))}
      </ul>
      <div>total: {totalCount}</div>
    </div>
  );
};

export default UserSearch;
