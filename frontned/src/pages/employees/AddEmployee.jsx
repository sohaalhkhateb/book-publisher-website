import { useEffect, useState } from "react";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import closeImage from '../../assets/images/icons/close.png'
import plusImage from '../../assets/images/icons/plus2.png'
import okImage from '../../assets/images/icons/ok.png'
import { Header } from "../layout/Header";
import { Occupations } from "../../components/Occupation";
import { Button } from "../../components/Button";
import api from "../../lib/axios";
import { useLocation, useNavigate } from "react-router";

export function AddEmployee() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(undefined);
    const [rating, setRating] = useState(undefined);
    const [image, setImage] = useState(undefined);
    const [notes, setNotes] = useState('');
    const [storedOccupations, setStoredOccupations] = useState([]);
    const [selectedOccupations, setSelectedOccupations] = useState([]);

    const [occupationName, setOccupationName] = useState('');
    const [occupationColor, setOccupationColor] = useState('#000000');

    const [occupationAdder, setOccupationAdder] = useState(false);
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});
    const [occupationErrors, setOccupationErrors] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOccupations = async () => {
            const response = await api.get('/occupations')
            setStoredOccupations(response.data);
        }
        fetchOccupations();
    }, [occupationAdder])

    async function AddEmployee() {
        try {
            setLoading(true)
            const response = await api.post('/employees', {
                name, age, rating, image, notes, selectedOccupations
            })
            if (response.data.success) {
                setLoading(false)
                navigate(response.data.redirect, {
                    state: 'you\'ve added an employee successfully!'
                })

            }
        } catch (error) {
            console.log(error.response.data)
        }
    }
    async function addOccupation() {
        if (occupationAdder) {
            setLoading(true)
            try {
                await api.post('/occupations', {
                    name: occupationName, color: occupationColor
                })
                setOccupationAdder(false)
                setLoading(false)

            } catch (error) {
                setOccupationErrors(error.response.data)

                setLoading(false)
            }

        }
        else {
            setOccupationAdder(true)
        }
    }

    return (
        <>
            <Header />
            <div className="content-container">

                <InputFieldWithErrors
                    type='text'
                    name='name'
                    value={name}
                    setValue={setName}
                    error={errors.name}
                    color='green'
                    required={true}
                    message="enter employee name:"
                />
                <InputFieldWithErrors
                    type='number'
                    name='age'
                    value={age}
                    setValue={setAge}
                    error={errors.age}
                    color='green'
                    required={false}
                    message="enter employee age"
                />
                <InputFieldWithErrors
                    type='number'
                    name='rating'
                    value={rating}
                    setValue={setRating}
                    error={errors.rating}
                    color='green'
                    required={false}
                    message="rate this employee"
                />
                <InputFieldWithErrors
                    type='file'
                    name='image'
                    value={image}
                    setValue={setImage}
                    error={errors.image}
                    color='green'
                    required={false}
                    message="insert an image of the employee"
                />
                <InputFieldWithErrors
                    type='text'
                    name='notes'
                    value={notes}
                    setValue={setNotes}
                    error={errors.notes}
                    color='green'
                    required={false}
                    message="enter a note"
                />
                <hr />
                <h2>Choose occupation(s) for this employee</h2>
                <Occupations
                    occupations={storedOccupations}
                    selectedOccupations={selectedOccupations}
                    setSelectedOccupations={setSelectedOccupations}
                />
                {occupationAdder && (
                    <div>
                        <InputFieldWithErrors
                            type='text'
                            name='occupationName'
                            value={occupationName}
                            setValue={setOccupationName}
                            error={occupationErrors.name}
                            message="enter the occupation name"
                        />
                        <InputFieldWithErrors
                            type='color'
                            name='occupationColor'
                            value={occupationColor}
                            setValue={setOccupationColor}
                            error={occupationErrors.color}
                            message="choose a color for the occupation tag"
                        />
                    </div>
                )}
                {occupationAdder && (
                    <Button
                        position="left"
                        image={closeImage}
                        text='cancel'
                        color='red'
                        onClick={() => setOccupationAdder(false)}
                    />
                )}
                <Button
                    image={occupationAdder ? okImage : undefined}
                    text={occupationAdder ? 'add now' : 'add occupation'}
                    color={occupationAdder ? 'darkgreen' : null}
                    onClick={addOccupation}
                    isLoading={loading}
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                    <Button
                        text='cancel'
                        image={closeImage}
                        position="left"
                        color='red'
                        onClick={() => navigate('/employees')}
                    />
                    <Button
                        text='add employee'
                        image={plusImage}
                        isLoading={loading}
                        color='green'
                        onClick={AddEmployee}
                    />
                </div>
            </div>
        </>
    );
}