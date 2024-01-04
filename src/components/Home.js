import UserContext from '../contexts/UserContext';
import buttonSet from './Form/Buttons';
import { useContext } from 'react';
export default function Home() {
    const{ userData } = useContext(UserContext);
    // pegar usuario a partir do id, verificar se tem ativo ou nao
    
    return(
        <>
            <buttonSet.AddButton></buttonSet.AddButton>
            <buttonSet.BackButton></buttonSet.BackButton>
            <buttonSet.ConfigButton></buttonSet.ConfigButton>
            <buttonSet.ConfirmButton></buttonSet.ConfirmButton>
            <buttonSet.RemoveButton></buttonSet.RemoveButton>
            <buttonSet.WorkoutButton></buttonSet.WorkoutButton>
        </>
        
    );
}
