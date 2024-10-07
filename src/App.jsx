import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Commune from "./pages/Commune";
import StarterPack from "./pages/StarterPack";
import StarterPackDetail from "./pages/StarterPackDetail";
import Explainer from "./pages/Explainer";
import ExplainerDetail from "./pages/ExplainerDetail";
import Maintainers from "./pages/Maintainers";
import { Analytics } from "@vercel/analytics/react";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import OpenCalls from "./pages/OpenCalls"; // Add this import

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/commune' element={<Commune />} />
          <Route path='/starter-packs' element={<StarterPack />} />
          <Route path='/starter-packs/:id' element={<StarterPackDetail />} />
          <Route path='/explainer' element={<Explainer />} />
          <Route path='/explainer/:id' element={<ExplainerDetail />} />
          <Route path='/maintainers' element={<Maintainers />} />
          <Route path='/chart' element={<Chat />} />
          <Route path='/open-calls' element={<OpenCalls />} />{" "}
          {/* Add this line */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Analytics />
      </Layout>
    </Router>
  );
}

export default App;
