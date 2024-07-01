import { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../hooks/useSearch";
import UserCard from "../components/UserCard";
import Paginator from "../components/Paginator";
import convertToK from "../utils/convertToK";

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

  return (
    <>
      <b>{convertToK(totalCount)} results</b>
      <ul>
        {results.map((item) => (
          <li key={item.id} className="user-card">
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
  );
};

export default UserSearch;
