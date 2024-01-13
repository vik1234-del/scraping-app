import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import NewsItem from "../NewsItem";

// import { useProSidebar } from "react-pro-sidebar";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=business&apiKey=7162cbcf047e4998a1af47fd339e3eab"
      );
      console.log(response);
      <Suspense fallback={<div>Loading Component</div>}>
        {setArticles(response.data.articles)}
      </Suspense>;
      // collapseSidebar();
    };
    getArticles();
  }, []);
  return (
    <>
      {articles.map((article) => {
        return (
          <NewsItem
            source={article.source.name}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </>
  );
};

export default Home;
