import './InventoryPage.css'
import {InventoryHeader} from './InventoryHeader'
import { useState } from 'react'
export function InventoryPage() {
  const [updateState , setUpdateState] = useState('');
  const inventoryList = [
    {
      amount: 20,
      types: {
          textPaper:{
            a1: 'A1 20%',
            a2: 'A2 5%',
            a3: 'A3 10%',
            a4: 'A4 40%',
          },
          stockPaper:{
          stock1: 'stock1 20%',
          stock2: 'stock2 20%',
          stock3: 'stock3 20%',
          }
      }
    },
    {
      amount:30,
      types: {
        black: 'black 30%',
        white: 'white 20%',
        red: 'red 10%'
      }
    },
    {
      amount: 20,
      types: {
        glue: 'glue 13%',
        covers: {
          carton: 'carton 5%',
          cloth: 'cloth 2%',
          leather: 'leather 4%'
        }
      }
    },
    {
      amount: 40,
      types: {
        digitalPrinters: 'digital printers:5%',
        offsetPrintingPresses: 'offset printing presses: 5%'
      }
    },
    {
      amount: 20,
      types:{
        lamination: 'lamination 2%',
        foilStamping : 'foil stamping: 5%',
        embossing : 'embossing: 1%'
      }
    }

  ]
  function toggleUpdateButton() {
    setUpdateState(!updateState);
  }
  return(
    <>
    <InventoryHeader />
    <div className="inventory-container">
      <p className='inventory-title'>
        You can manage all resources to make your book
      </p>
      <ul className='inventory-ul'>
        <li>
          <div className='inventory-txt-btn'>
            <p className='inventory-txt'>number of total available peper: 23%</p>
            <button 
              className='inventory-update-button'
              onClick={toggleUpdateButton}
            >
              update
            </button>
          </div>
          {updateState && 
          <>
            <div className='inventory-type-container'>
              <p className='inventory-type-txt'>Types of papers</p>
              <select 
                name="paper-type" 
                id=""
                className='inventory-select'
              >
                <optgroup label='text paper'>
                  <option value="a1">A1 : 5%</option>
                  <option value="a2">A2 : 5%</option>
                  <option value="a3">A3 : 5%</option>
                  <option value="a4">A4 : 5%</option>
                </optgroup>
                <optgroup label='coverStock'>
                  <option value="stock1">stock1 : 5%</option>
                  <option value="stock2">stock2 : 5%</option>
                  <option value="stock3">stock3 : 5%</option>
                </optgroup>
              </select>
            </div>
            <div className='invantory-quantity-txt-input'>
              <p className='inventory-quantity-txt'>the quantity you want to buy:</p>
              <input type="number" className='inventory-quantity-input'/>
            </div>
              <button className='make-order-btn'>
                make the order
              </button>
          </>
          }
        </li>
        <li>
          <div className='inventory-txt-btn'>
            <p className='inventory-txt'>amount of ink available: 23%</p>
            <button 
              className='inventory-update-button'
              onClick={toggleUpdateButton}
            >
              update
            </button>
          </div>
          {updateState &&
          <>
            <div className='inventory-type-container'>
              <p className='inventory-type-txt'>Colors of ink</p>
              <select 
                name="ink-type" 
                id=""
                className='inventory-select'
              >
                <option value="black">black : 5%</option>
                <option value="red">red : 5%</option>
                <option value="green">green : 5%</option>
              </select>
            </div>
            <div className='invantory-quantity-txt-input'>
              <p className='inventory-quantity-txt'>the quantity you want to buy:</p>
              <input type="number" className='inventory-quantity-input'/>
            </div>
            <button className='make-order-btn'>
              make the order
            </button>       
          </>}
        </li>
        <li>
          <div className='inventory-txt-btn'>
            <p className='inventory-txt'>amount of binding materials: 30%</p>
            <button 
              className='inventory-update-button'
              onClick={toggleUpdateButton}
            >
              update
            </button>
          </div>
          {
            updateState && 
            <>
              <div className='inventory-type-container'>
                <p className='inventory-type-txt'>types of binding:</p>
                <select 
                  name="binding-type" 
                  id=""
                  className='inventory-select'
                >
                  <option value="black">glue : 5%</option>
                  <optgroup label='covers'>
                      <option value="carton">carton : 5%</option>
                      <option value="cloth">cloth : 5%</option>
                      <option value="leather">leather : 5%</option>
                    </optgroup>
                </select>
              </div>
              <div className='invantory-quantity-txt-input'>
                <p className='inventory-quantity-txt'>the quantity you want to buy:</p>
                <input type="number" className='inventory-quantity-input'/>
              </div>
              <button className='make-order-btn'>
                make the order
              </button>   
            </>
          }
        </li>
        <li>
          <div className='inventory-txt-btn'>
            <p className='inventory-txt'>printing equepment: 5</p>
            <button 
              className='inventory-update-button'
              onClick={toggleUpdateButton}
            >
              update
            </button>
          </div>
            {
              updateState && 
              <>
                <div className='inventory-type-container'>
                  <p className='inventory-type-txt'>types of printing equepment:</p>
                  <select 
                    name="printing-type" 
                    id=""
                    className='inventory-select'
                  >
                    <option value="digital">digital printers : 5%</option>
                    <option value="offset">offset printing presses : 5%</option>
                  </select>
                </div>
                <div className='invantory-quantity-txt-input'>
                  <p className='inventory-quantity-txt'>the quantity you want to buy:</p>
                  <input type="number" className='inventory-quantity-input'/>
                </div>
                <button className='make-order-btn'>
                  make the order
                </button>
              </>
            }
        </li>
        <li>
          <div className='inventory-txt-btn'>
            <p className='inventory-txt'>finishing materials: 20%</p>
            <button 
              className='inventory-update-button'
              onClick={toggleUpdateButton}
            >
              update
            </button>
          </div>
            {
              updateState &&
              <>
                <div className='inventory-type-container'>
                  <p className='inventory-type-txt'>types of finishing materials:</p>
                  <select 
                    name="finishing-materials-type" 
                    id=""
                    className='inventory-select'
                  >
                    <option value="lamination">lamination : 5%</option>
                    <option value="foil stamping">foil stamping : 5%</option>
                    <option value="embossing">embossing : 5%</option>
                  </select>
                </div>
                <div className='invantory-quantity-txt-input'>
                  <p className='inventory-quantity-txt'>the quantity you want to buy:</p>
                  <input type="number" className='inventory-quantity-input'/>
                </div>
                <button className='make-order-btn'>
                  make the order
                </button>
              </>
            }
        </li>
      </ul>
    </div>
    </>
  )
}