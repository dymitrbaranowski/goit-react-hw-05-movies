import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <link to="/create">Create quiz</link>
        </li>
        <li>
          <link to="/quizes">Quiz List</link>
        </li>
      </ul>
      <Routes>
        <Route path="/create" element={<div>Create quiz Page</div>} />
        <Route path="/quizes" element={<div>Quizes Page</div>} />
        <Route path="/quizes/:quizId" element={<div>Single quize Page</div>} />
      </Routes>
    </div>
  );
};
