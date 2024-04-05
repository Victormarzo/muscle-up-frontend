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
import ActiveWorkout from './components/ActiveWorkout';
import Workout from './components/Workout';
import Execution from './components/Execution';
import WorkoutDisplay from './components/Workout/WorkoutDisplay';
import Create from './components/Workout/Create';
import Toggle from './components/Workout/Toggle';
import Home from './components/Home';
import GlobalStyle from './assets/styles/globalStyles';

export default function App() {
    return (
        <>
            <UserProvider>
                <GlobalStyle/>
                <Router>
                    <Routes>
                        <Route path="/sign-in" element={<SignIn/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/" element={<ProtectedRouteGuard><Home/></ProtectedRouteGuard>} />
                        <Route path="/workout/:workoutId" element={<ProtectedRouteGuard><Workout/></ProtectedRouteGuard>} />
                        <Route path="/workout-display/:workoutId" element={<ProtectedRouteGuard><WorkoutDisplay/></ProtectedRouteGuard>} />
                        <Route path="/active-workout" element={<ProtectedRouteGuard><ActiveWorkout/></ProtectedRouteGuard>}/>
                        <Route path="/execution/:exerciseId" element={<ProtectedRouteGuard><Execution/></ProtectedRouteGuard>}/>
                        <Route path="/create" element={<ProtectedRouteGuard><Create/></ProtectedRouteGuard>} />
                        <Route path="/toggle" element={<ProtectedRouteGuard><Toggle/></ProtectedRouteGuard>} />
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

