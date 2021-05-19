import React, { useState } from 'react'
import styled from 'styled-components'
import { DefaultBtn } from "./Landing"
import InputColor from 'react-input-color';

const General = styled.section`


  border-radius: .25rem;

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
    .css-1yn2e29-InputColor{
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

const WidgetGen = styled(General)`
  padding: 1.5rem;
  background-color:white;
`;

const Product = styled(General)`
  max-width: 650px;
  width: 415px;
  margin: auto;
  select,.form-input{
    margin-bottom: .85rem;
  }
  [type="checkbox"]{
    display: inline-block;
    width: 1rem;
    height: 1rem;

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

const Verify = () => {
  const [initialBorder, setInitialBorder] = useState('#E37F5DFF');
  const [borderColor, setBorderColor] = useState({});

  // Background
  const [initialBG, setInitialBG] = useState('#FaFaFa');
  const [bGColor, setBGColor] = useState({});

  // Logo
  const [logo, setLogo] = useState("https://notilos.com/verify/v1/client/paga.jpg")


  return (
    <div className="py-10 px-4 md:px-6 container mx-auto ">
      <h2 className="font-bold text-3xl mb-6">Widget Generator</h2>

      <div className="grid md:grid-cols-2 gap-8 ">

        <WidgetGen className="hidden md:block">
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Service ID</label>
              <input type="text" disabled="" className="bg-gray-200" defaultValue="7dds6vdvwewnejdnwjeniwj88383jen3uen" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Logo URL</label>
              <input type="text" value={logo} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="border">Border Color</label>
              <div className="flex form-input">
                <InputColor initialValue={initialBorder} onChange={setBorderColor} />
                <input className="uppercase"
                  type="text" defaultValue={initialBorder}
                  value={borderColor.hex}
                  onChange={e => setInitialBorder(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="border">Background Color</label>
              <div className="flex form-input">
                <InputColor initialValue={initialBG} onChange={setBGColor} />
                <input className="uppercase"
                  type="text" defaultValue={initialBG}
                  value={bGColor.hex}
                  onChange={e => setInitialBG(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="ID">ID Type</label>
              <select className="">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Address Type</label>
              <select className="">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <DefaultBtn>Submit</DefaultBtn>
          </form>
        </WidgetGen>

        <Product className="p-6" style={{ backgroundColor: `${bGColor.hex}` }}>
          <div className="p-4 rounded" style={{ border: `2px solid ${borderColor.hex}` }}>
            <img width="122" height="35" src={logo} alt="company" className="mx-auto my-6" />
            <div>
              <h2>Add your photo</h2>
            </div>

            {/* ID TYPE */}
            <div>
              <div className="form-input relative">
                <span className="placeholder">ID Type</span>
                <select>
                  <option>Bank Verification Number (BVN)</option>
                  <option>Bank Verification Number (BVN)</option>
                  <option>Bank Verification Number (BVN)</option>
                </select>
              </div>
              <div className="form-input relative">
                <span className="placeholder">ID NO</span>
                <input type="text" />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <div className="form-input relative">
                <span className="placeholder">Address Type</span>
                <select>
                  <option>Address Type 1</option>
                  <option>Address Type 2</option>
                  <option>Address Type 3</option>
                </select>
              </div>
              <div className="form-input relative">
                <span className="placeholder">Address</span>
                <input type="text" />
              </div>
            </div>


            {/* CONSENT */}
            <div className="flex items-center">
              <input type="checkbox" id="consent" className="w-4 h-4 mr-3" />
              <label htmlFor="consent">Allow Access to Pull Account Details?</label>
            </div>


            {/* BUTTON */}
            <button className=" p-3 w-full rounded mt-4" style={{ backgroundColor: `${borderColor.hex}` }}>Submit</button>
          </div>
        </Product>
      </div>
    </div >
  )
}

export default Verify
