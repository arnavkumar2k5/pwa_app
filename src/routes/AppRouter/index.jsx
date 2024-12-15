import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../../pages/HomePage"
import QuestionPage from "../../pages/QuestionPage"
import TFQuestionView from '../../views/TFQuestionView';
import TFQuestionPage from '../../pages/TFQuestionPage';
import CongratulationPage from '../../pages/CongratulationPage';

export const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/questionsPage",
        element: <QuestionPage/>
    },
    {
        path: "/TFQuestionView",
        element: <TFQuestionPage/>
    },
    {
        path: "/congratulations",
        element: <CongratulationPage/>
    }
])