import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import useSearch from "../useSearch";
import UserCard from "../components/UserCard";
import convertToK from "../utils/convertToK";

const UserSearch = () => {
  const { searchQuery } = useContext(SearchContext);
  const { results, totalCount, loading, error } = useSearch(
    "users",
    searchQuery
  );

  console.log(results, totalCount);

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
    </>
  );
};

export default UserSearch;
