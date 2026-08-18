import InputFieldWithErrors from "../../components/InputFieldWithErrors";
import { Button } from "../../components/Button";
import { useState } from "react";
import upwardsArrow from '../../assets/images/icons/upwardsArrow.png'
import backImage from '../../assets/images/icons/back.png'
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import axios from "axios";
import './Step6.css'

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
            <h2
                style={{
                    fontSize: 'clamp(20px, 2vw, 30px)',
                    color: 'var(--primary)'
                }}
            >•what services do you need ?</h2>
            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input
                        type='checkbox'
                        checked={print}
                        className="checkbox-input"
                        onChange={(e) => setPrint(e.target.checked)}
                    />
                    <span
                        className="checkbox-txt"
                    >
                        print
                    </span>
                </label>
                <label className="checkbox-label">
                    <input
                        type='checkbox'
                        checked={publish}
                        className="checkbox-input"
                        onChange={(e) => setPublish(e.target.checked)}
                    />
                    <span
                        className="checkbox-txt"
                    >
                        publish
                    </span>
                </label>
                <label className="checkbox-label">
                    <input
                        type='checkbox'
                        checked={translate}
                        className="checkbox-input"
                        onChange={(e) => setTranslate(e.target.checked)}
                    />
                    <span
                        className="checkbox-txt"
                    >
                        translate
                    </span>
                </label>
                <label className="checkbox-label">
                    <input
                        type='checkbox'
                        checked={other}
                        className="checkbox-input"
                        onChange={(e) => setOther(e.target.checked)}
                    />
                    <span
                        className="checkbox-txt"
                    >
                        other (comment below)
                    </span>
                </label>
            </div>

            {error.services && <p
                style={{
                    fontSize: 'clamp(20px, 2vw, 23px)',
                    color: 'var(--error)',
                }}
            >
                {error.services}</p>}
            <br />
            <hr />
            <br />
            <div
                className="step6-inputs"
            >
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
            </div>
            <br />
            <hr />
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button
                    color='firebrick'
                    text='go back'
                    position="left"
                    image={backImage}
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
            </div>
        </>
    )
}