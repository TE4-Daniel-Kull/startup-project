import React from 'react';
import BasicHeader from './components/BasicHeader';
import BasicFooter from './components/BasicFooter';
import StartPage from './views/StartPage'

function App() {
    return (
        <div>
            <BasicHeader />
            <StartPage />
            <BasicFooter />
        </div>
    );
}

export default App;