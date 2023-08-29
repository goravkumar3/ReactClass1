import './App.css';
import Nav from './components/nav'
import Main  from './components/main';
import Card from './components/card';
import image1 from './media/07fee4431e99669805a4c7309d938ab5.jpg'
import image2 from './media/08d183caba7a7f66135f6847793efca3.jpg'
import Hook1 from './components/hook1';
function App() {
  return (
    <div className="App-header">
      <Nav/>
      <Main/>
      <Card title="title 1" desc="This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`." source={image1}/>
      <Card title="title 2" desc="This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`." source={image2}/>
      <Hook1/>  
    </div>
  );
}

export default App;
