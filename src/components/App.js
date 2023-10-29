import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";



function App() {
  return (
    <div className="App">

      <Header blogName="Overreacted" />
      <About image="https://imgur.com/1bX5QH6" aboutText1="Personal blog by Dan Abramov." aboutText2="I explain with words and code" />
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;
