import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import {ArticlePage} from '../article-page';
import {Header} from '../../modules/header';

export function MainPage() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/article" element={<ArticlePage/>}/>
                    {/*<Route path="/anotherPage" element={<AnotherPage/>}/>*/}
                </Routes>
                <Link to="article">Link to article</Link>
            </div>
        </Router>
    );
}
