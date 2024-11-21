function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* Подключение Boxicons */}
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"

                />
                <link rel="stylesheet" href="style.css"/>

                <h1>HassanAwan</h1>
            </header>

            <main>
                <section className="container forms">
                    {/* Форма входа */}
                    <div className="form login">
                        <h3 className="heading">Login-Form</h3>
                        <form className="content">
                            <div className="line underline"></div>

                            <div className="field input">
                                <input type="email" placeholder="Enter your Email"/>
                            </div>

                            <div className="field input">
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    className="password"
                                />
                                <i className="bx bx-hide hide-show"></i>
                            </div>

                            <div className="forg">
                                <a href="#" className="forget">
                                    Forget password?
                                </a>
                            </div>

                            <div className="field btn">
                                <button type="button">Login</button>
                            </div>

                            <div className="link sign-login">
                                <span>Don't have an Account!</span>
                                <a href="#" className="forget">
                                    Sign up
                                </a>
                            </div>

                            <div className="line"></div>
                            {/* Другие опции входа */}
                            <div className="thirdLogin field facebook">
                                <i className="bx bxl-facebook-circle face-icon"></i>
                                <span>Login with Facebook</span>
                            </div>

                            <div className="thirdLogin field google">
                                <i className="bx bxl-google face-icon"></i>
                                <span>Login with Google</span>
                            </div>
                        </form>
                    </div>

                    {/* Форма регистрации */}
                    <div className="form signup">
                        <h3 className="heading">SignUp-Form</h3>
                        <form className="content">
                            <div className="line underline"></div>

                            <div className="field input">
                                <input type="email" placeholder="Enter your Email" required/>
                            </div>

                            <div className="field input">
                                <input
                                    type="password"
                                    placeholder="Enter your new Password"
                                    className="password"
                                    required
                                />
                                <i className="bx bx-hide hide-show"></i>
                            </div>

                            <div className="field input">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="password"
                                    required
                                />
                                <i className="bx bx-hide hide-show"></i>
                            </div>

                            <div className="space"></div>

                            <div className="field btn">
                                <button type="button">Sign Up</button>
                            </div>

                            <div className="link sign-login">
                                <span>Already have an Account!</span>
                                <a href="#" className="forget">
                                    Login
                                </a>
                            </div>

                            <div className="line"></div>
                            {/* Другие опции регистрации */}
                            <div className="thirdLogin field facebook">
                                <i className="bx bxl-facebook-circle face-icon"></i>
                                <span>SignUp with Facebook</span>
                            </div>

                            <div className="thirdLogin field google">
                                <i className="bx bxl-google face-icon"></i>
                                <span>SignUp with Google</span>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <script src="./script.js"></script>
        </div>
    );
}

export default App;

