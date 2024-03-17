import React from 'react';

function NavBar({ isLoggedIn, onLogin, onLogout }) {
    // const isLoggedIn = false;

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            margin: '0',
            height: '60px',
            // boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
            backgroundColor: 'white'
        
        }}>
            <div className="logo">
                {/* Add your logo here */}
            </div>
            <div className="title">
                Do it!
            </div>
            <div className="login-logout">
                {isLoggedIn ? (
                    <button onClick={() => {
                        console.log('Logout')
                    }}>Logout</button>
                ) : (
                    <button onClick={() => {
                        console.log('Login')
                    }}>Login</button>
                )}
            </div>
        </nav>
    );
}

export default NavBar;