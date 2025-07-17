import { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import './Layout.css';
import quizmania from '../assets/imgs/QUIZMania.svg';
import { useAuth } from "../context/AuthContext";
const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isResultPage = location.pathname === '/result';
    const isQuizPage = location.pathname.startsWith('/quiz/');
    const {name} = useAuth();
  return (
    <Suspense fallback={<>Loading......</>}>
        <div className="layout">
            <div className="d-flex layout-header">
                <img src={quizmania} alt="QuizMania" />
                {isQuizPage && <div className="exit-btn">
                    <button onClick={() => navigate("/")}>Exit Quiz</button>
                </div> }
                {isResultPage && <div className="player-name">
                     {name}
                </div>}
            </div>
            <Outlet/>
        </div>
    </Suspense>
  );
};

export default Layout;