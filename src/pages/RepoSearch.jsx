import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../useSearch";

const RepoSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const { results, totalCount, loading, error } = useSearch(
    "repositories",
    searchQuery
  );

  console.log(results, totalCount);

  return (
    <div>
      <ul>
        {results.map((item) => (
          <li>{item.full_name}</li>
        ))}
      </ul>
      <div>total: {totalCount}</div>
    </div>
  );
};

export default RepoSearch;
