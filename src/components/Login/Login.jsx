import './Login.css';
import padlock from '../assets/padlock.png'
import email from '../assets/email.png'

const Login = () => {

/******** Teste utilizando conexão com MySQL  **********/ 
/*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        console.log('Login successful');
        
      } else {
        console.error('Login failed');
        
      }
    } catch (error) {
      console.error('Error:', error);
 
    }
  };*/

  return (
    <div className="page-container">
    <div className="login-container">
      <div className="header">
        <div className="text">LOGIN</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email} alt="E-mail icon" />
          <input type="email" placeholder='E-mail'/>
        </div>
        <div className="input">
          <img src={padlock} alt="Password icon" />
          <input type="password" placeholder='Senha'/>
        </div>
        <div className="submit-container">
          <div className="submit">Login</div>
        </div>
        <div className="forgot-password">Esqueci minha senha</div>
      </div>
    </div>
    </div>
  );
};

export default Login;