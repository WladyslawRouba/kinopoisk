import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import { MainPage } from "@/pages/MainPage/MainPage";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage";
import { FilteredMoviesPage } from "@/pages/FilteredMoviesPage/FilteredMoviesPage";
import { SearchPage } from "@/pages/SearchPage/SearchPage";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage";
import { MovieDetailsPage } from "@/pages/MovieDetailsPage/MovieDetailsPage";
import { GlobalSnackbar } from "@/components/GlobalSnackbar/GlobalSnackbar";
import { GlobalLoader } from "@/app/GlobalLoader.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";



function App() {
    return (
        <BrowserRouter>
            <GlobalLoader />
            <div id="app-container">
                <Header />

                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />

                        <Route path="/category/:type" element={
                            <div className="layout"><CategoryPage /></div>
                        } />

                        <Route path="/filtered" element={
                            <div className="layout"><FilteredMoviesPage /></div>
                        } />

                        <Route path="/search" element={
                            <div className="layout"><SearchPage /></div>
                        } />

                        <Route path="/favorites" element={
                            <div className="layout"><FavoritesPage /></div>
                        } />

                        <Route path="/movie/:id" element={
                            <div className="layout"><MovieDetailsPage /></div>
                        } />

                        <Route path="*" element={<NotFoundPage />} />

                    </Routes>
                </main>
                <GlobalSnackbar />
                <Footer />
            </div>
        </BrowserRouter>
    );
}


export default App;
