import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers/router';

// import { MenuIcon, XIcon } from '@heroicons/react/outline'

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
            {publicRoutes.map((route, index) => {
                const Layout = route.component
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                          <Layout />
                        }
                    />
                );
            })}
        </Routes>
    </div>
</Router>
  );
}

export default App;