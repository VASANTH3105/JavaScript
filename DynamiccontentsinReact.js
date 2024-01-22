import './App.css';

function App() {
  const title = "This is a dynamic content in React!...";
  //adding dynamic content
  const likes = 50; //considered as a String
  //adding dynamic link
  const link = "www.wiki.bitsathy.ac.in";

  return (
    <div className="App">
      <div className="content">
        <h1>This is level one Heading </h1>
        <h2> { title } </h2>
        {/* curly braces search for the dynamic content that has been stored in the variable */}
        <p> { likes } Likes </p>
        {/* <p> { You can write any type of valid JavaScript code inside these curly braces} </p> */}
        <p> {Math.random()} </p>
        {/* Link can be also a dynamic */}
        <a href= { link } >Click this link</a>
        {/* no need single or double quotes */}
        
      </div>
    </div>
  );
}

export default App;
