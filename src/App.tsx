import MainLayout from 'layout';
import './App.css';
import { FC, Suspense } from 'react';

const App: FC = () => {

  return (
    <Suspense fallback="Loading...">
      <div className='App'>
        <MainLayout/>
      </div>
    </Suspense>
  );
}

export default App;
