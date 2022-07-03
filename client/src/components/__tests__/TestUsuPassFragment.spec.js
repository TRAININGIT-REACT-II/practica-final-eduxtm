import { mount, render } from "enzyme";
import UsuPassFragment from "../common/UsuPassFragment";

/**
 * Test para el componente UsuPassFragment
 */
describe(UsuPassFragment, () => {
  // Pruebas de renderizado
  describe("Render", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<UsuPassFragment />);
    });

    it("Agrega los elementos HTML", () => {
        expect(wrapper.find("form").length).toBe(1);
        expect(wrapper.find("input[type='text']").length).toBe(1);
        expect(wrapper.find("input[type='password']").length).toBe(1);
        expect(wrapper.find("input[type='button']").length).toBe(1);
    });
  });

  // Pruebas funcionales
//   describe("Funcionales", () => {
//     let wrapper;

//     beforeEach(() => {
        // FIXME: It looks like you called `mount()` without a global document being loaded.
//       wrapper = mount(<UsuPassFragment />);
//     });

//     it("Actualiza el valor de usuario", () => {
//         const newUser = 'user1';

//         const usernameInput = wrapper.find("#username")
//         const onChangeEvent = {target: {name: "username", value: newUser}};
//         wrapper.ref('username').simulate('change', onChangeEvent);
//         expect(usernameInput.value).toBe(newUser);
//     });

//   });
});
