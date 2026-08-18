import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import closeImage from '../../assets/images/icons/close.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import axios from "axios";


export function Step6() {


    const [print, setPrint] = useState(false);
    const [publish, setPublish] = useState(false);
    const [translate, setTranslate] = useState(false);
    const [other, setOther] = useState(false);
    const [comment, setComment] = useState('');
    const [files, setFiles] = useState(null);


    const [error, setError] = useState({});


    const navigate = useNavigate();


    const [loading, setLoading] = useState(false);


    async function next() {
        setLoading(true);
        setError({});


        await api.post('/orders?step=5', {
            'print': print ? 1 : 0,
            'publish': publish ? 1 : 0,
            'translate': translate ? 1 : 0,
            'other': other ? 1 : 0,
            'comment': comment,
            'files[]': files
        }, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then((response) => {
                if (response.data.success) {
                    setLoading(false)
                    navigate('/guestOrder/3')
                }
            }).catch((errors) => {
                setError(errors.response.data.errors ?? errors.response.data)
                setLoading(false)
            })
    }


    return (
        <>
            <h2>what services do you need ?</h2>


            <label>
                <input
                    type='checkbox'
                    checked={print}
                    onChange={(e) => setPrint(e.target.checked)}
                />
                print
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    checked={publish}
                    onChange={(e) => setPublish(e.target.checked)}
                />
                publish
            </label>
            <br />


            <label>
                <input
                    type='checkbox'
                    checked={translate}
                    onChange={(e) => setTranslate(e.target.checked)}
                />
                translate
            </label>
            <br />


            <label>
                <input
                    type='checkbox'
                    checked={other}
                    onChange={(e) => setOther(e.target.checked)}
                />
                other (comment below)
            </label>
            <br />


            {error.services && <p>{error.services}</p>}


            <InputFieldWithErrors
                type='text'
                name='comment'
                value={comment}
                setValue={setComment}
                error={error.comment}
                required={false}
            />


            <InputFieldWithErrors
                type='file'
                name='files'
                value={files}
                setValue={setFiles}
                error={error.files}
                required={true}
                multipleFiles={true}
            />


            <hr />


            <Button
                color='firebrick'
                text='go back'
                position="left"
                image={closeImage}
                onClick={() => navigate('/guestOrder/5')}
                isLoading={loading}
            />


            <Button
                color='darkgreen'
                text='next'
                image={upwardsArrow}
                onClick={next}
                isLoading={loading}
            />
        </>
    )
}