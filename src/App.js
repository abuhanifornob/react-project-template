import React from 'react';

import { FaFacebookF, FaFacebookMessenger } from 'react-icons/fa';

const App = () => {
    return (
        <div>
            <h2>This is React Icons Componemts</h2>
            <button>
                <span className="">
                    <FaFacebookF className="icon" />
                </span>
                <span className="">
                    <FaFacebookMessenger className="icon" />
                </span>
            </button>
            <button>
                <span className="">
                    <FaFacebookMessenger className="icon" />
                </span>
            </button>
        </div>
    );
};

export default App;
