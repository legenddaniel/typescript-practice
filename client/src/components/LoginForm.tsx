import React from 'react';

const LoginForm = (): JSX.Element => {
    return (
        <form>
            <label>
                <input type="email" name="login-email" />
                Email
            </label>
            <label>
                <input type="password" name="login-password" />
                Password
            </label>
            <div>
                <div>
                    <label>
                        <input type="checkbox" name="remember-me" />
                        Remember Me
                    </label>
                </div>
                <div>
                    Forgot password?
                    <a href="#">Reset Password</a>
                </div>
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginForm;