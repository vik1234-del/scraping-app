import React from "react";
import "tachyons";
import "./newsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <section class="mw7 center avenir">
      <article class="bt bb b--black-10">
        <div className="news-item">
          <div className="news-item">
            <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img
                src={urlToImage}
                class="db"
                className="'news-img"
                alt={urlToImage}
              />
            </div>
            <div class="w-100 w-60-ns pl3-ns">
              <h3 class="f3 fw1 baskerville mt0 lh-title">
                <a href={url}>{title}</a>
              </h3>
              <p class="f6 f5-l lh-copy">{description}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NewsItem;
