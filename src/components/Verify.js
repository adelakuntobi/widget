import React, { useState } from 'react'
import InputColor from 'react-input-color';
import { Product, WidgetGen } from './Styles';
import '@smile_identity/smart-camera-web'



const Verify = () => {
  const [initialBorder, setInitialBorder] = useState('#E37F5DFF');
  const [borderColor, setBorderColor] = useState({});

  // Background
  const [initialBG, setInitialBG] = useState('#FaFaFa');
  const [bGColor, setBGColor] = useState({});

  // Logo
  const [logo, setLogo] = useState("https://notilos.com/verify/v1/client/paga.jpg")


  // ID Option
  const [IDOption, setIDOption] = useState("No")
  const [AddrOption, setAddrOption] = useState("Yes")


  // Checkboxes
  const [BVN, setBVN] = useState(true)
  const [NIN, setNIN] = useState(true)
  const [passport, setPassport] = useState(true)
  const [DL, setDL] = useState(true)

  // const smartCameraWeb = document.querySelector('smart-camera-web');

  // smartCameraWeb.addEventListener('imagesComputed', (e) => {
  //   const data = e.detail;
  
  //   // add any textual data that may be required here
    
  // });


  return (
    <div className="py-10 px-4 md:px-6 container mx-auto ">
      <h2 className="font-bold text-3xl mb-6">Widget Generator</h2>

      <div className="grid md:grid-cols-2 gap-8 ">

        <WidgetGen className="hidden md:block">
          <form>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Service ID</label>
              <input type="text" disabled className="bg-gray-200" defaultValue="7dds6vdvwewnejdnwjeniwj88383jen3uen" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Logo URL</label>
              <input type="text" value={logo} onChange={e => setLogo(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="border">Border Color</label>
              <div className="flex form-input">
                <InputColor initialValue={initialBorder} onChange={setBorderColor} />
                <input className="uppercase"
                  type="text" defaultValue={initialBorder}
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
                  onChange={e => setInitialBG(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="ID">ID Type</label>
              <select className=""
                defaultValue={IDOption}
                onChange={e => setIDOption(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {IDOption === "Yes" ?
              <div className="form-group input">
                <h4>Please Select</h4>
                <div className="flex items-center">
                  <input defaultChecked={BVN}
                    onChange={() => setBVN(!BVN)}
                    type="checkbox" id="bvn" className="w-4 h-4 mr-3" />
                  <label htmlFor="bvn">Bank Verification Number (BVN)</label>
                </div>
                <div className="flex items-center">
                  <input defaultChecked={NIN}
                    onChange={() => setNIN(!NIN)}
                    type="checkbox" id="nin" className="w-4 h-4 mr-3" />
                  <label htmlFor="nin">National Identity Number (NIN)</label>
                </div>
                <div className="flex items-center">
                  <input defaultChecked={passport}
                    onChange={() => setPassport(!passport)}
                    type="checkbox" id="passport" className="w-4 h-4 mr-3" />
                  <label htmlFor="passport">Passport</label>
                </div>
                <div className="flex items-center">
                  <input defaultChecked={DL}
                    onChange={() => setDL(!DL)} type="checkbox" id="dl" className="w-4 h-4 mr-3" />
                  <label htmlFor="dl">Drivers' License</label>
                </div>
              </div> : ""}

            <div className="form-group">
              <label className="form-label" htmlFor="name">Address Type</label>
              <select className=""
                defaultValue={AddrOption}
                onChange={e => setAddrOption(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </form>
        </WidgetGen>

        <Product className="p-6" style={{ backgroundColor: `${bGColor.hex}` }}>
          <div className="p-4 rounded" style={{ border: `2px solid ${borderColor.hex}` }}>
            <img width="122" height="35" src={logo} alt="company" className="mx-auto my-6" />
            <div>
              <h2>Add your photo</h2>
              <smart-camera-web>
              </smart-camera-web>
            </div>

            {/* ID TYPE */}
            {IDOption === "Yes" ?
              <div>
                <div className="form-input relative">
                  <span className="placeholder">ID Type</span>
                  <select>
                    <option hidden defaultselected="true">Please Select</option>
                    {BVN ? <option>Bank Verification Number (BVN)</option> : ""}
                    {NIN ? <option>National Identity Number (NIN)</option> : ""}
                    {passport ? <option>Passport</option> : ""}
                    {DL ? <option>Drivers' License</option> : ""}
                  </select>
                </div>
                <div className="form-input relative">
                  <span className="placeholder">ID NO</span>
                  <input type="text" />
                </div>
              </div> : ""
            }

            {/* ADDRESS */}
            {AddrOption === "Yes" ?
              <div className="ease-in-out duration-700 transition-all">
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
              </div> : ""
            }


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
