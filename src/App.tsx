import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "@/components/Header/Header.tsx"
import { MainPage } from "@/pages/MainPage/MainPage";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage";
import { FilteredMoviesPage } from "@/pages/FilteredMoviesPage/FilteredMoviesPage.tsx";
import { SearchPage } from "@/pages/SearchPage/SearchPage";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage.tsx";
import { MovieDetailsPage } from "@/pages/MovieDetailsPage/MovieDetailsPage";
import {Footer} from "@/components/Footer/Footer";

function App() {
    return(
        <BrowserRouter>


                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/category/:type" element={<CategoryPage />} />
                        <Route path="/filtered" element={<FilteredMoviesPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/movie/:id" element={<MovieDetailsPage />} />
                        <Route path="*" element={<div>404 — Page Not Found</div>} />
                    </Routes>
                </main>
                <Footer />


        </BrowserRouter>
    )
}



export default App
