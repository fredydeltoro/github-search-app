import React from "react";
import convertToKM from "../utils/convertToKM";
import { formatDistanceToNow } from "date-fns";

/**
 * RepoCard Component
 *
 * This component renders a card displaying details of a GitHub repository.
 * It shows the repository owner's avatar, name, and repository information including
 * language, stars, last update time, and description.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.repo - The repository object.
 * @param {Object} props.repo.owner - The owner of the repository.
 * @param {string} props.repo.name - The name of the repository.
 * @param {string} props.repo.language - The primary language of the repository.
 * @param {number} props.repo.stargazers_count - The number of stars the repository has.
 * @param {string} props.repo.updated_at - The last update timestamp of the repository.
 * @param {string} props.repo.description - The description of the repository.
 *
 * @returns {JSX.Element} A card component displaying repository details.
 */

const RepoCard = ({ repo }) => {
  const isOrganization = repo.owner.type === "Organization";

  return (
    <div className="card">
      <div className="card-body">
        <div className="content">
          <h5 className="card-title d-flex">
            <div className={isOrganization ? "avatar-square" : "avatar"}>
              <img src={repo.owner.avatar_url} alt="avatar" />
            </div>
            <span className="mx-2">
              {repo.owner.login} / {repo.name}
            </span>
          </h5>
          <h6 className="card-subtitle badges mb-2 text-body-secondary">
            <span>{repo.language}</span>
            <span>
              <i className="status-icon bi bi-star-fill"></i>
              {convertToKM(repo.stargazers_count)}
            </span>
            <span>
              Updated{" "}
              {formatDistanceToNow(repo.updated_at, { addSuffix: true })}
            </span>
          </h6>
          <p className="card-text">{repo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
