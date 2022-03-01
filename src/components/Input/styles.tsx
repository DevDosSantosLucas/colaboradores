import styled from '@emotion/styled'

// export const Container = styled.input`
// display: flex;
// flex-direction: row;
// align-items: center;
// margin: 20px;

// width:90%;
// height:5%;

// border: 2px solid #CAD6D1;
// box-sizing: border-box;
// border-radius: 8px;
// `
export const Container = styled.div`

  position: relative;
  width: 20rem;
  height: 3rem;

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid $clr-gray300;
    border-radius: $radius;
    font-family: inherit;
    font-size: inherit;
    color: white;
    outline: none;
    padding: 1.25rem;
    background: none;

    &:hover {
      border-color: $clr-primary-light;
    }

    /* Change border when input focus*/

    &:focus {
      border-color: $clr-primary;
    }
  `