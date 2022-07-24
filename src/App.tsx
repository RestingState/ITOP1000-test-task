import AppFooter from './containers/layout/AppFooter';
import AppHeader from './containers/layout/AppHeader';
import Home from './pages/home/Home';
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Home />
      <AppFooter />
    </div>
  );
}

export default App;
