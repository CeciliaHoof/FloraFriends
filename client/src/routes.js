import App from './components/App';
import Home from './pages/Home';
import Plants from './pages/Plants';
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
import UserProfile from './components/UserProfile'
import PlantProfile from './pages/PlantProfileComponents/PlantProfile';
import ManageAccount from './components/ManageAccount';


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
            {
                path: '/profile/:id',
                element: <UserProfile />
            },
            {
                path: '/manage_account/:id',
                element: <ManageAccount />
            }

        ]
    }
];

export default routes;