import "./styles.css";
import List from "./List";
import PropAnyName from "./PropTest";
import SpaceArticle from "./SpaceArticle";
import spaceWiki from "./SpaceWiki";

function spaceWikiLoop(sArticle) {
  return (
    <SpaceArticle
      key={sArticle.key}
      title={sArticle.title}
      content={sArticle.content}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> This is where the para goes</p>
      <List />
      <PropAnyName
        paraoneTest="from app I am para one"
        paraTwoTest="I am para two"
        ParaThreeTest="I am para threee"
      />
      <SpaceArticle title={spaceWiki[0].title} content={spaceWiki[0].content} />
      <SpaceArticle title={spaceWiki[1].title} content={spaceWiki[1].content} />
      <SpaceArticle title={spaceWiki[2].title} content={spaceWiki[2].content} />
      <SpaceArticle title={spaceWiki[3].title} content={spaceWiki[3].content} />

      {/* instaed of writiing the space article 4 times I can use the map function on 
my SpaceWiki array and map will call the funtion to render all articles. */}
      {spaceWiki.map(spaceWikiLoop)}
    </div>
  );
}
