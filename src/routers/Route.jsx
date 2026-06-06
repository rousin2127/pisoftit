import { createHashRouter, Navigate } from 'react-router';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import CaseStudies from '../pages/CaseStudy/CaseStudies';
import Contact from '../pages/Contact/Contact';

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayouts />,
    children: [
      { index: true, 
        element: <Home /> 
      },
      { path: 'services', 
        element: <Services /> 
      },
      { path: 'case-studies', 
        element: <CaseStudies /> 
      },
      { path: 'about', 
        element: <About /> 
      },
      { path: 'blog', 
        element: <Home /> 
      },
      { path: 'contact', 
        element: <Contact /> 
      },
      { path: '*', 
        element: <Navigate to="/" replace /> 
      },
    ],
  },
]);
