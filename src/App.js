// Import React and ReactDOM from node_modules
import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';

import BodyParts from './components/BodyParts';


import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';


import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';




// Restaurant Card Component


// Data Object


// Body Layout Component
// Body Layout Component



// App Layout Component
const AppLayout = () => {
    return (
        <div className='Applayout'>
            {/* Header */}
           <Header/>
            {/* Body */}

            <Outlet/>

           
        </div>
    );
};


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<BodyParts/>,
                errorElement:<Error/>

            },
            {
                path:'/about',
                element:<About/>,
                errorElement:<Error/>
        
            },
            {
                path:'/contact',
                element:<Contact/>,
                errorElement:<Error/>
            },
            {
                path:'/restaurants/:resId',
                element:<ResturantMenu/>
            }

        ],
        errorElement:<Error/>

    },

])




// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter}/>);
