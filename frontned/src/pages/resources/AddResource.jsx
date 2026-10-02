import { Header } from "../layout/Header";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import addWhite from '../../assets/images/icons/add-white.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate, useOutletContext } from "react-router";
import { NarrowView } from "../layout/NarrowView";
import { InputList } from "../../components/InputList";
import './AddResource.css'
import { useEffect } from "react";

export function AddResource() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('kg');
  const [minStock, setMinStock] = useState('');
  const [price, setPrice] = useState('');
  const [supplier, setSupplier] = useState('');

  const [error, setError] = useState({});
  const setLayoutContext = useOutletContext()


  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLayoutContext({
      searchBar: false,
      sideBar: true,
      narrowView: true,
      bodyHeader: 'add a new resource to your inventory :'
    })
  }, [])
  async function uploadResource() {
    setLoading(true);

    await api.post('/resources', {
      name, category, stock, unit, supplier,
      min_stock: minStock,
      price_in_cents: price,
    }).then((response) => {
      if (response.data.success) {
        setLoading(false)
        navigate(response.data.redirect, { state: 'your resource has been added successfully!!' })

      }
    }).catch((errors) => {
      setError(errors.response.data)
      setLoading(false)
    })
  }
  return (
    <>

      <div className="add-resource-container">
        <div className="add-resource-left">
          <InputFieldWithErrors
            type='text'
            name='name'
            value={name}
            setValue={setName}
            error={error.name}
            color='var(--primary)'
            message="enter the name of the resource :"
          />
          <InputFieldWithErrors
            type='text'
            name='category'
            value={category}
            setValue={setCategory}
            error={error.category}
            color='var(--primary)'
            message="enter the category of the resource :"

          />
          <InputFieldWithErrors
            type='number'
            name='stock'
            value={stock}
            setValue={setStock}
            error={error.stock}
            color='var(--primary)'
            message="enter the current available quantity of the resource :"
          />
          <InputList
            options={[
              { piece: 'piece' },
              { pack: 'pack' },
              { box: 'box' },
              { kg: 'kg' },
              { g: 'g' },
              { liter: 'liter' },
              { ml: 'ml' },
              { bottle: 'bottle' },
              { container: 'container' },
              { ream: 'ream' },

            ]}
            value={unit}
            setValue={setUnit}
            label="choose one of the following units :"
          />
        </div>
        <div className="add-resource-right">

          <InputFieldWithErrors
            type='number'
            name='minStock'
            value={minStock}
            setValue={setMinStock}
            error={error.min_stock}
            color='var(--primary)'
            message="enter the minimum quantity threshold (gives warning when below):"
          />
          <InputFieldWithErrors
            type='number'
            name='price'
            value={price}
            setValue={setPrice}
            error={error.price_in_cents}
            color='var(--primary)'
            message="enter the cost of one unit"
          />
          <InputFieldWithErrors
            type='text'
            name='supplier'
            value={supplier}
            setValue={setSupplier}
            error={error.supplier}
            color='var(--primary)'
            required={false}
          />
        </div>
      </div>
      < div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          position: 'sticky',
          bottom: '10px',
          marginTop: '10px'
        }}>
        <Button
          color='firebrick'
          text='cancel'
          position="left"
          image={closeImage}
          onClick={() => navigate('/resources')}
          isLoading={loading}
        />
        <Button
          color='darkgreen'
          text='add'
          image={addWhite}
          onClick={uploadResource}
          isLoading={loading}
        />
      </div >
    </>
  )
}