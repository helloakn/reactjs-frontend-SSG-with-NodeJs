import React, { Component } from 'react';

class LoginLayout extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Войти</h1>
                <form>
                    <input type="text" placeholder="укажите e-mail" />
                    <input type="text" placeholder="укажите пароль" />
                    <button>Войти</button>
                </form>
            </div>
        );
    }
}

export {LoginLayout};