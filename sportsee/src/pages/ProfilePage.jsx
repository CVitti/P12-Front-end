// @ts-nocheck

// CSS Import
import '../styles/pages/ProfilePage.css';

// React/React-router components import
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Custom components import
import ChartsContainer from '../components/charts/ChartsContainer';
import CardsContainer from '../components/cards/CardsContainer';


// Fetch functions import from API or mock services (use only one at once)
import { getUserDataById, getUserPerfById, getUserActivityById, getUserAvgSessions } from '../services/fetchAPI';
// import { getUserDataById, getUserPerfById, getUserActivityById, getUserAvgSessions } from '../services/mockAPI';

/**
 * Profile page of the app (User personal infos, activity, performance, score, sessions)
 * @returns JSX Code for the Profile page 
 */
function ProfilePage(){
    
    // Collecting ID from URL and prepare to redirect further if invalid ID
    const { id } = useParams();
    const navigate = useNavigate();

    // Get current user data from DB
    const [currentUserData, setCurrentUserData] = useState({
        userInfos: {},
        keyData: {
            calorieCount: "",
            proteinCount: "",
            carbohydrateCount: "",
            lipidCount: ""
        },
        score:[{todayScore:0}]
    });

    // Get current user performance from DB
    const [currentUserPerf, setCurrentUserPerf] = useState({
        "data": []
    });

    // Get current user activity from DB
    const [currentUserActivity, setCurrentUserActivity] = useState({
        "sessions": []
    });

    // Get current user average sessions from DB
    const [currentUserSessions, setCurrentUserSessions] = useState({
        "sessions": []
    });

    // Updating data on ID change
    useEffect(() => {
        Promise.all([
            getUserPerfById(id).then(data => setCurrentUserPerf(data)),
            getUserDataById(id).then(data => setCurrentUserData(data)),
            getUserActivityById(id).then(data => setCurrentUserActivity(data)),
            getUserAvgSessions(id).then(data => setCurrentUserSessions(data))
        ]).catch(data => navigate("/Error"));
        
    }, [id, navigate]);

    // If no data received for this ID, redirection to Error page, else display user profile
    return(
        <main className='flex flex--column'>
            <h1>
                Bonjour
                <span className='firstName'> {currentUserData.userInfos.firstName}</span>
            </h1>
            <h2>
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </h2>

            <div className='flex flex--row profileDetailsContainer'>
                <ChartsContainer activityProps={currentUserActivity} sessionsProps={currentUserSessions} performanceProps={currentUserPerf} userScoreProps={currentUserData.score}/>
                <CardsContainer keyDataProps={currentUserData.keyData} />                    
            </div>
        </main>
    );   
}
export default ProfilePage;