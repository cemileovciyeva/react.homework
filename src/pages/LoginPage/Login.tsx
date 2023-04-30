import "./Login.css";
export const Login = () => {
    return (
        <div className="containerLogin">
            <img className="cancel" src="./images/cancel-close-delete-svgrepo-com.svg" alt=""/>
            <h1>Log in or sign up</h1>
            <div className="containerLogin1">
                <label>Email</label> <br/>
                <input type="email" name="email" required/>
                <button className="continue">Continue</button>
                <div className="divider"> 
                    <hr/>OR<hr/>
                </div>
                <div className="buttonLogin">
                  <button>
                    <img src="./images/facebook-1-svgrepo-com.svg" alt=""/>
                    Continue with Facebook
                </button>
                  <button>
                    <img src="./images/google-svgrepo-com.svg" alt=""/>
                    Continue with Google
                </button>
                  <button>
                    <img src="./images/apple-internet-media-svgrepo-com.svg" alt=""/>
                    Continue with Apple
                </button>
                  <button>
                    <img src="./images/mobile-phone-svgrepo-com.svg" alt=""/>
                    Continue with phone
                </button>
                </div>
            </div>
        </div>
    );
};