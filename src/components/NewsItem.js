import React from "react";

const NewsItem = ({ author, source, title, description, url, urlToImage }) => {
  return (
    <div className="outline pa4 ma7 mb4 mt5 w-auto bg-white ba b--black-10 shadow-1 ">
      <h2 className="baskerville f2 lh-copy">{source}</h2>
      <h3>{author}</h3>
      <img
        src={urlToImage}
        // class="db"
        className="pa2 w-auto"
        alt={urlToImage}
      />
      <div className="ml4">
        <h3 className="f3 lh-copy dim">
          <a href={url}>{title}</a>
        </h3>
        <p className="f4 lh-copy">{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
