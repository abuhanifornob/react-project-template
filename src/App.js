import React from 'react';

import { FaFacebookF, FaFacebookMessenger } from 'react-icons/fa';

import State from './components/State';
import ConditionalRandaring from './components/ConditionalRandaring/ConditionalRandaring';

const App = () => {
    return (
        <div>
            <State></State>
            <ConditionalRandaring />
        </div>
    );
};

export default App;
