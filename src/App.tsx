import MainContext from './context/main';
import Main from './pages/Main';
import { MainService } from './services/main';

function App() {
    const mainController = new MainService();
    return (
        <MainContext.Provider value={mainController}>
            <Main />
        </MainContext.Provider>
    );
}

export default App;
