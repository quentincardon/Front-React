import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './components/Accueil/Acceuil.js';
import BrandsList from './components/Brands/BrandsList';
import BrandsForm from './components/Brands/BrandsForm';
import Connexion from './components/Connexion/Connexion';
import NatureList from './components/Nature/NatureList';
import NatureForm from './components/Nature/NatureForm';
import GuaranteeList from './components/Guarantee/GuaranteeList';
import CreateStudent from './components/Student/create-student.component';
import EditStudent from './components/Student/edit-student-component';
import StudentList from './components/Student/student-list-component';




function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <BrowserRouter>
      <Routes>
      <Route path="/Accueil" element={<Accueil />} />
      <Route path="/Connexion" element={<Connexion />} />
      <Route path="/brands" element={<BrandsList />} />
      <Route path="/brandsForm" element={<BrandsForm />} />
      <Route path="/nature" element={<NatureList />} />
      <Route path="/natureForm" element={<NatureForm />} />
      <Route path="/guarantee" element={<GuaranteeList />} />
      <Route path="/create-student" element={<CreateStudent />} />
      <Route path="/edit-student/:brand_id" element={<EditStudent />} />
      <Route path="/student-list" element={<StudentList/>} />


      </Routes>
    </BrowserRouter>
      <Footer />




     
    </div>
  );
}

export default App;