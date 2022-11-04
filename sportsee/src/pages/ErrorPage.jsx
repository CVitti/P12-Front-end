// @ts-nocheck

// CSS Import
import '../styles/pages/ErrorPage.css';

/**
 * 
 * @returns Code for the Profile page (User personal infos, activity, performance, score, sessions)
 */
function ErrorPage(){
    return(
        <main className='flex flex--column'>
            <h1 className='pageError'>
                Erreur 404, page non trouvée
            </h1>
        </main>
    );
}

export default ErrorPage;