import React from "react";
import convertToKM from "../utils/convertToKM";
import { formatDistanceToNow } from "date-fns";

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
