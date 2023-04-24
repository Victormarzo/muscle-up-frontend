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

export default function App() {
    return (
        <>
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path="/sign-in" element={<SignIn/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/test" element={<Test/>} />
                        <Route path="/workout/:workoutId" element={<Workout/>} />
                        <Route path="/active-workout" element={<ActiveWorkout/>}/>
                        <Route path="/execution/:exerciseId" element={<Execution/>}/>
                        
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

