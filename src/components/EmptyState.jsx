import React from "react";

const EmptyState = ({ search }) => {
  const emptyMessage = "No Results Found";
  const emptyLegend = "Try adjusting your search criteria or check back later.";
  const initialMessage = "Welcome to GitHub Search";
  const inititialLegend =
    "Use the search bar above to find users or repositories.";

  return (
    <div className="custom-jumbotron bg-light p-5 rounded-lg">
      <h1 className="display-4">{search ? emptyMessage : initialMessage}</h1>
      <hr className="my-4" />
      <p> {search ? emptyLegend : inititialLegend}</p>
    </div>
  );
};

export default EmptyState;
