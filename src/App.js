import HomePage from "./routes/home/home.component";

import { Route, Routes } from "react-router-dom";
import NavigationMenu from "./routes/navigation/navigation.component";
import TrainingSessions from "./routes/training-sessions/training-sessions.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationMenu />}>
        <Route index element={<HomePage />} />
        <Route path='training-sessions' element={<TrainingSessions />}/>
      </Route>
    </Routes>
  );
}

export default App;
