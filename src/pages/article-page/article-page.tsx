import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import { Article } from './modules'

export function ArticlePage() {
    return (
            <div>
                <Article/>
            </div>
    );
}
