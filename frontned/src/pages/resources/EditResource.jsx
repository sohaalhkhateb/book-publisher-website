import { Header } from "../layout/Header";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NarrowView } from "../../components/NarrowView";
import checkImage from '../../assets/images/icons/check.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { InputList } from "../../components/InputList";

export function EditResource() {
    const params = useParams();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(null);
    const [unit, setUnit] = useState('');
    const [minStock, setMinStock] = useState(null);
    const [priceInCents, setPriceInCents] = useState('');
    const [supplier, setSupplier] = useState('');

    const [error, setError] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchResource() {
            try {
                setLoading(true);
                const response = await api.get(`/resources/${params.id}`);

                setName(response.data.name)
                setCategory(response.data.category)
                setStock(response.data.stock)
                setUnit(response.data.unit)
                setMinStock(response.data.min_stock)
                setPriceInCents(response.data.price_in_cents.replace('$',''))
                setSupplier(response.data.supplier)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        fetchResource();
    }, [])

    async function editResource() {
        setLoading(true);

        await api.patch(`/resources/${params.id}`, {
            name,
            category,
            stock,
            unit,
            min_stock: minStock,
            price_in_cents: priceInCents,
            supplier
        })
            .then((response) => {
                if (response.data.success) {
                    setLoading(false)
                    navigate(response.data.redirect, { state: 'your resource has been updated successfully!!' })
                }
            })
            .catch((errors) => {
                setError(errors.response.data)
                setLoading(false)
            })
    }

    return (
        <NarrowView>
            <Header />
            <div>
                <h2>edit your resource information :</h2>
                <div>
                    <InputFieldWithErrors
                        color='darkkhaki'
                        type='text'
                        name='resource name'
                        value={name}
                        setValue={setName}
                        error={error.name}
                    />
                    <InputFieldWithErrors
                        color='darkkhaki'
                        type='text'
                        name='resource category'
                        value={category}
                        setValue={setCategory}
                        error={error.category}
                    />
                    <InputFieldWithErrors
                        color='darkkhaki'
                        type='number'
                        name='resource stock'
                        value={stock}
                        setValue={setStock}
                        error={error.stock}
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
                        color='darkkhaki'
                        type='number'
                        name='resource min stock'
                        value={minStock}
                        setValue={setMinStock}
                        error={error.min_stock}
                    />
                    <InputFieldWithErrors
                        color='darkkhaki'
                        type='text'
                        name='resource price'
                        value={priceInCents}
                        setValue={setPriceInCents}
                        error={error.price_in_cents}
                    />
                    <InputFieldWithErrors
                        color='darkkhaki'
                        type='text'
                        name='supplier'
                        value={supplier}
                        setValue={setSupplier}
                        error={error.supplier}
                        required={false}
                    />
                </div>

                <div className="divider"></div>
                <div className="button-wrapper-left">
                    <Button
                        color='firebrick'
                        text='cancel'
                        position="left"
                        image={closeImage}
                        onClick={() => navigate(`/resources/${params.id}`)}
                        isLoading={loading}
                    />
                </div>
                <div className="button-wrapper-right">
                    <Button
                        color='darkgreen'
                        text='confirm'
                        image={checkImage}
                        onClick={editResource}
                        isLoading={loading}
                    />
                </div>
            </div>
        </NarrowView>
    )
}