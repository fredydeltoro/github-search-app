import { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../hooks/useSearch";
import RepoCard from "../components/RepoCard";
import Paginator from "../components/Paginator";
import convertToKM from "../utils/convertToKM";

const RepoSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const perPage = 2;
  const { results, totalCount, loading, error } = useSearch(
    "repositories",
    searchQuery,
    page,
    perPage
  );
  const totalPages = Math.ceil(totalCount / perPage);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <b>{convertToKM(totalCount)} results</b>
      <ul>
        {results.map((item) => (
          <li className="repo-card" key={item.id}>
            <RepoCard repo={item} />
          </li>
        ))}
      </ul>
      <Paginator
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default RepoSearch;
