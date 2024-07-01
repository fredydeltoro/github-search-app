import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../hooks/useSearch";
import RepoCard from "../components/RepoCard";
import convertToKM from "../utils/convertToKM";

const RepoSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const { results, totalCount, loading, error } = useSearch(
    "repositories",
    searchQuery
  );

  console.log(results, totalCount);

  return (
    <>
      <b>{convertToKM(totalCount)} results</b>
      <ul>
        {results.map((item) => (
          <li className="repo-card">
            <RepoCard repo={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoSearch;
