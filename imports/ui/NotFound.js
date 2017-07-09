/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return(
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page Not Found</h1>
                <p>Hmmm, we're unable to find that page.</p>
                <Link className="button button--link" to="/">HEAD HOME</Link>
            </div>
        </div>
    );
}