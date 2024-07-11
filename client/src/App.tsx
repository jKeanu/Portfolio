import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Page from './page/Page';

function App() {

  return (
      <Router >
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
      </Router>
  )
}

export default App
