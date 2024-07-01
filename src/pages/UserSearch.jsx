import { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../hooks/useSearch";
import UserCard from "../components/UserCard";
import Paginator from "../components/Paginator";
import EmptyState from "../components/EmptyState";
import convertToKM from "../utils/convertToKM";

const UserSearch = () => {
  const [page, setPage] = useState(1);
  const { searchQuery } = useContext(SearchContext);
  const perPage = 2;
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

  return (
    <>
      {results.length ? (
        <>
          <b>{convertToKM(totalCount)} results</b>
          <ul>
            {results.map((item) => (
              <li className="user-card" key={item.id}>
                <UserCard item={item} />
              </li>
            ))}
          </ul>
          <Paginator
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyState search={searchQuery} />
      )}
    </>
  );
};

export default UserSearch;
