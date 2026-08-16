import { Header } from "../layout/Header";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import { NarrowView } from "../../components/NarrowView";
import { InputList } from "../../components/InputList";


export function AddResource() {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('kg');
  const [minStock, setMinStock] = useState('');
  const [price, setPrice] = useState('');
  const [supplier, setSupplier] = useState('');

  const [error, setError] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
    <div>
      <Header />
      <NarrowView>
        <h2 >add a new resource to your publishing house :</h2>
        <div>
          <InputFieldWithErrors
            type='text'
            name='name'
            value={name}
            setValue={setName}
            error={error.name}
            message="enter the name of the resource :"
          />
          <InputFieldWithErrors
            type='text'
            name='category'
            value={category}
            setValue={setCategory}
            error={error.category}
            message="enter the category of the resource :"

          />
          <InputFieldWithErrors
            type='number'
            name='stock'
            value={stock}
            setValue={setStock}
            error={error.stock}
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
          <InputFieldWithErrors
            type='number'
            name='minStock'
            value={minStock}
            setValue={setMinStock}
            error={error.min_stock}
            message="enter the minimum quantity threshold (gives warning when below):"
          />
          <InputFieldWithErrors
            type='number'
            name='price'
            value={price}
            setValue={setPrice}
            error={error.price_in_cents}
            message="enter the cost of one unit"
          />
          <InputFieldWithErrors
            type='text'
            name='supplier'
            value={supplier}
            setValue={setSupplier}
            error={error.supplier}
            required={false}
          />
        </div>

        <div >
          <Button
            color='firebrick'
            text='cancel'
            position="left"
            image={closeImage}
            onClick={() => navigate('/resources')}
            isLoading={loading}
          />
        </div>
        <div >
          <Button
            color='darkgreen'
            text='add'
            image={upwardsArrow}
            onClick={uploadResource}
            isLoading={loading}
          />
        </div>
      </NarrowView>
    </div>
  )
}