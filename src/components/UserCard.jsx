import { useEffect, useState } from "react";

/**
 * UserCard Component
 *
 * This component displays a user card with information fetched from a given URL.
 * It shows the user's avatar, name, login, location, number of public repositories, number of followers, and bio.
 *
 * @param {Object} item - The user data object containing initial information.
 * @param {string} item.url - The URL to fetch the complete user data.
 * @param {string} item.avatar_url - The URL of the user's avatar image.
 * @param {string} item.login - The user's GitHub login name.
 *
 * @returns {JSX.Element} A card component displaying user information.
 */
const UserCard = ({ item }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch the complete user data from the provided URL
    fetch(item.url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [item.url]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex">
          <div className="avatar">
            <img src={item.avatar_url} alt="avatar" />
          </div>
          <div className="content">
            <h5 className="card-title">
              <b>{user.name}</b> / {item.login}
            </h5>
            <h6 className="card-subtitle badges mb-2 text-body-secondary">
              <span>{user.location}</span>
              <span>
                <i className="status-icon bi bi-journal-bookmark-fill"></i>
                {user.public_repos}
              </span>
              <span>
                <i className="status-icon bi bi-people-fill"></i>
                {user.followers}
              </span>
            </h6>
            <p className="card-text">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
