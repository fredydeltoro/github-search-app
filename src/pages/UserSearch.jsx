import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../hooks/useSearch";
import UserCard from "../components/UserCard";
import Paginator from "../components/Paginator";
import EmptyState from "../components/EmptyState";
import convertToKM from "../utils/convertToKM";
import LoadingSpinner from "../components/LoadingSpinner";

const UserSearch = () => {
  const [page, setPage] = useState(1);
  const { searchQuery } = useContext(SearchContext);
  const perPage = 10;
  const { results, totalCount, loading, error } = useSearch(
    "users",
    searchQuery,
    page,
    perPage
  );
  const totalPages = Math.ceil(totalCount / perPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  return (
    <div className="container mt-3">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : results.length ? (
        <>
          <b>{convertToKM(totalCount)} results</b>
          <ul className="list-unstyled">
            {results.map((item) => (
              <li className="user-card" key={item.id}>
                <UserCard item={item} />
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <Paginator
              currentPage={page}
              totalPages={Math.min(totalPages, 100)}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <EmptyState search={searchQuery} />
      )}
    </div>
  );
};

export default UserSearch;
