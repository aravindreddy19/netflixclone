import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'fc599703459aae42aed33de718da32f9',
};
const App = () => {
  return (
    <div>
      <Nav/>
      <Header />
      <Content />
    </div>
  );
};

export default App;
