import './LoginStyles.css'
function Login()
{
    return(
        <div className="mainPopUp">
            <form className="loginForm">

                    <div className="boxLogin">
                        <text>Username</text><br/>
                        <input type="text" name="pickDate" className="loginDetails" />
                    </div>
            
                    <div className="boxLogin">
                        <text>Password</text><br/>
                        <input type="password" name="pickDate" className="loginDetails" />
                    </div>

                    <div className="boxLogin">
                        <button className='bt2'>Login</button>
                    </div>
                    
            </form>
        </div>
    )
}

export default Login;