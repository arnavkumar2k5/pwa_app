import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import 'react-alice-carousel/lib/alice-carousel.css';
import QuestionPage from "./pages/QuestionPage";
import { RouterProvider } from 'react-router-dom';
import { AppRoute } from './routes/AppRouter';
const App = () => {
  return (
    <div>
      <RouterProvider router={AppRoute}/>
    </div>
  );
};

export default App;
