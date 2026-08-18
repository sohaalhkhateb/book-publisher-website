import { useEffect, useState } from "react";
import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import checkImage from '../../assets/images/icons/check.png'
import closeImage from '../../assets/images/icons/close.png'
import okImage from '../../assets/images/icons/ok.png'
import { Header } from "../layout/Header";
import { Occupations } from "../../components/Occupation";
import { Button } from "../../components/Button";
import { NarrowView } from '../../components/NarrowView';
import api from "../../lib/axios";
import { useNavigate, useParams } from "react-router";

export function EditEmployee() {

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

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchOccupations = async () => {
            const response = await api.get('/occupations')
            setStoredOccupations(response.data);
            const response2 = await api.get(`/employees/${params.id}`)
            setName(response2.data.name)
            setAge(response2.data.age)
            setRating(response2.data.rating)
            setImage(response2.data.Image)
            setNotes(response2.data.notes)
            setSelectedOccupations(response2.data.selectedOccupations.map((x) => x.id))

        }
        fetchOccupations();
    }, [occupationAdder])
    console.log(selectedOccupations)
    async function editEmployee() {
        try {
            setLoading(true)
            const response = await api.patch(`/employees/${params.id}`, {
                name, age, rating, image, notes, selectedOccupations
            }, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
            if (response.data.success) {
                setLoading(false)
                navigate(response.data.redirect, {
                    state: 'you\'ve edited an employee successfully!'
                })

            }
        } catch (error) {
            setErrors(error.response.data)
            setLoading(false)
        }
    }
    async function addOccupation() {
        if (occupationAdder) {
            setLoading(true)
            try {
                await api.post('/occupations', {
                    name: occupationName,
                    color: occupationColor
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
                <NarrowView>
                    <div className="fields-section">
                        <div className="fields-left-section">
                            <InputFieldWithErrors
                                type='text'
                                name='name'
                                value={name}
                                setValue={setName}
                                error={errors.name}
                                required={true}
                                message="enter employee name:"
                            />
                            <InputFieldWithErrors
                                type='number'
                                name='age'
                                value={age}
                                setValue={setAge}
                                error={errors.age}
                                required={false}
                                message="enter employee age"
                            />
                            <InputFieldWithErrors
                                type='number'
                                name='rating'
                                value={rating}
                                setValue={setRating}
                                error={errors.rating}
                                required={false}
                                message="rate this employee"
                            />
                        </div>
                        <div className='separator-container-emp'></div>
                        <div className="fields-right-section">
                            <InputFieldWithErrors
                                type='file'
                                name='image'
                                value={image}
                                setValue={setImage}
                                error={errors.image}
                                required={false}
                                message="insert an image of the employee"
                            />
                            <InputFieldWithErrors
                                type='text'
                                name='notes'
                                value={notes}
                                setValue={setNotes}
                                error={errors.notes}
                                required={false}
                                message="enter a note"
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="add-occupation-section">
                        <h2
                            style={{ color: 'var(--primary)', alignSelf: 'flex-start' }}
                        >Choose occupation(s) for this employee</h2>
                        <div style={{ alignSelf: 'stretch' }}>
                            <Occupations
                                occupations={storedOccupations}
                                selectedOccupations={selectedOccupations}
                                setSelectedOccupations={setSelectedOccupations}
                                errors={errors.selectedOccupations}
                            />
                        </div>
                        {occupationAdder && (
                            <div className="add-occupation-inputs">
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
                        <div className="add-occupation-btns">
                            {occupationAdder && (
                                <Button
                                    position="left"
                                    image={closeImage}
                                    text='exit'
                                    color='var(--warning)'
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
                        </div>
                    </div>
                    <div className="button-wrapper-left">
                        <Button
                            color='firebrick'
                            text='cancel'
                            position="left"
                            image={closeImage}
                            onClick={() => navigate(`/employees/${params.id}`)}
                            isLoading={loading}
                        />
                    </div>
                    <div className="button-wrapper-right">
                        <Button
                            color='darkgreen'
                            text='confirm'
                            image={checkImage}
                            onClick={editEmployee}
                            isLoading={loading}
                        />
                    </div>
                </NarrowView>
            </div>
        </>
    );
}