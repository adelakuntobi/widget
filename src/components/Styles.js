import styled from 'styled-components'

const General = styled.section`


  border-radius: .25rem;
  .input{
    div{

      margin-bottom: .5rem
    }
  }
  [type="checkbox"]{
    display: inline-block;
    width: 1rem;
    height: 1rem;

    &+label{
      margin-bottom: 0 !important;
    }
  }
  input,select{
    display: block;
    width: 100%;
    font-weight: 400;
    color: #3c4d62;
    /* background-color: #fff; */
    background-clip: padding-box;
    border: 1px solid #dbdfea;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: calc(2.625rem + 2px);
    padding: 0.6875rem 1rem;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    border-radius: 5px;
    &:focus{
      color: #3c4d62;
    background-color: #fff;
    border-color: rgb(133 79 255 / 10%);
    outline: 0;
    box-shadow: 0 0 0 3px rgb(133 79 255 / 10%);
    }
  }
  .form-group{
    margin-bottom: 1.25rem;

    label{
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 500;
      color: #344357;
      margin-bottom: 0.5rem;
    }


  .form-input{
    &>span{
      height: auto;
      padding: 0;
      border: 0;
      border-radius: 0.25rem;
    }
    input{
      border: 0;
      height: auto;
      padding: 0.6875rem 1rem;
      &:focus{
        color: 0;
        background-color: #fff;
        outline: 0;
        box-shadow: none;
      }
    }
    display: flex;
    width: 100%;
    font-weight: 400;
    color: #3c4d62;
    /* background-color: #fff; */
    background-clip: padding-box;
    border: 1px solid #dbdfea;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    height: calc(2.625rem + 2px);
    padding: 0;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    border-radius: 5px;
    &:focus-within{
      color: #3c4d62;
    background-color: #fff;
    border-color: rgb(133 79 255 / 10%);
    outline: 0;
    box-shadow: 0 0 0 3px rgb(133 79 255 / 10%);
    }
  }
}
`;

export const WidgetGen = styled(General)`
  padding: 1.5rem;
  background-color:white;
`;

export const Product = styled(General)`
  max-width: 650px;
  width: 415px;
  margin: auto;
  select,.form-input{
    margin-bottom: .85rem;
  }

    .placeholder{
    margin-bottom: .5rem;
    display: inline-block;
    font-size: 11px;
    line-height: 1.2;
    letter-spacing: 0.2em;
    color: #8094ae;
    text-transform: uppercase;
    font-weight: 700;
  }
`;