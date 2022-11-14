// @ts-nocheck

// CSS Import
import '../styles/pages/ErrorPage.css';

/**
 * Error page used for wrong routes or unknown ID
 * @returns JSX Code for the Error page
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