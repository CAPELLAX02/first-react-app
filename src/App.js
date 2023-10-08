import {
  BrowserRouter as Router,
  Route,
  Routes,
  // NavLink,
} from 'react-router-dom';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Card from './components/shared/Card';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
// import FeedbackData from './data/FeedbackData';
// import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            {/* <Route path='/about' component={AboutPage} /> */}
            <Route path='/about' element={<AboutPage />} />
            {/* <Route path='/post/*' element={<Post />} /> */}
          </Routes>

          {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}
          {/* Yukarıdaki olay: home linkine gittigimizde onun active olması, about linkine gittiğimizde onun active olması. Ek olarak, index.css'e .active selector'ı ekleyerek active olan linki barizleştirebiliriz. */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
