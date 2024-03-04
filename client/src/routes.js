import App from './components/App';
import Home from './pages/Home';
import Plants from './pages/Plants';
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
import PlantProfile from './pages/PlantProfileComponents/PlantProfile';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/plants',
                element: <Plants />
            },
            {
                path: '/plants/:id',
                element: <PlantProfile />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    }
];

export default routes;