import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/about/AboutUs';
import WhoWeAre from './pages/about/WhoWeAre';
import WhyShaze from './pages/about/WhyShaze';
import Services from './pages/services/Services';
import KitchenDesign from './pages/services/KitchenDesign';
import Products from './pages/products/Products';
import FotileKitchen from './pages/products/FotileKitchen';
import Contact from './pages/Contact';
import InteriorDesign from './pages/services/InteriorDesign';
import Doors from './pages/products/Doors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-process" element={<WhoWeAre />} />
          <Route path="why-shaze" element={<WhyShaze />} />
          <Route path="services" element={<Services />} />
          <Route path="kitchen-design" element={<KitchenDesign />} />
          <Route path="interior-design" element={<InteriorDesign />} />
          <Route path="doors" element={<Doors />} />
          <Route path="fotile-kitchen" element={<FotileKitchen />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;