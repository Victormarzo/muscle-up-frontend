import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import useToken from './hooks/useToken';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { UserProvider } from './contexts/UserContext';
import Test from './components/Test';
import ActiveWorkout from './components/ActiveWorkout';
import Workout from './components/Workout';
import Execution from './components/Execution';
import LastExecution from './components/Execution/LastExecution';
import WorkoutDisplay from './components/Workout/WorkoutDisplay';
import Create from './components/Workout/Create';
import Toggle from './components/Workout/Toggle';
import Home from './components/Home';
export default function App() {
    return (
        <>
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path="/sign-in" element={<SignIn/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/test" element={<Test/>} />
                        <Route path="/" element={<Home/>} />
                        <Route path="/workout/:workoutId" element={<Workout/>} />
                        <Route path="/workout-display/:workoutId" element={<WorkoutDisplay/>} />
                        <Route path="/active-workout" element={<ActiveWorkout/>}/>
                        <Route path="/execution/:exerciseId" element={<Execution/>}/>
                        <Route path="/create" element={<Create/>} />
                        <Route path="/toggle" element={<Toggle/>} />

                    </Routes>
                </Router>
            </UserProvider>
        </>
    );
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();
    if (!token) { 
        return <Navigate to="/sign-in" />;
    }
    
    return <>
        {children}
    </>;
}

