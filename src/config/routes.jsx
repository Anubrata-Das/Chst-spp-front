
import { Route,Routes } from 'react-router'
import App from "../App"
const AppRoutes = () => {
return (
    <Routes>
      <Route path='/'  element={<App />} />
      <Route path='/chat'  element={<h1>fukker</h1>} />
    </Routes>
  );
};

export default AppRoutes
