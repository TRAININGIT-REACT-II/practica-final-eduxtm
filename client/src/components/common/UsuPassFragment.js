import { AppThemesEnum } from "../../shared/data/AppThemes";
import "./UsuPassFragment.css";


// Estado del formulario por defecto (valor inicial)
const FORM_INITIAL_STATE = {
  username: "",
  password: "",
};

const UsuPassFragment = ({theme = AppThemesEnum.DARK.toLowerCase(), formLogin = FORM_INITIAL_STATE, handleFormChange, handleFormSubmit}) => {

  return (
    <>
      <div className="wrapper fadeInDown">
      <span>Para poder usar la app, dinos quién eres</span>
        <div id="formContent" className={theme}>
          <form>
            <input
              type="text"
              id="username"
              name="username"
              className="fadeIn second"
              placeholder="Usuario"
              value={formLogin.username}
              onChange={handleFormChange}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              className="fadeIn third"
              placeholder="Contraseña"
              value={formLogin.password}
              onChange={handleFormChange}
              required
            />
            <input type="button" className="fadeIn fourth" value="Log In" onClick={handleFormSubmit} />
          </form>
        </div>
      </div>
      </>
  );
};

export default UsuPassFragment;
