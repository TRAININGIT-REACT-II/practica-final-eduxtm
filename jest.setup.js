import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configuración del adaptador para React
Enzyme.configure({ adapter: new Adapter() });