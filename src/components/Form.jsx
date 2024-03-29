import react, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MessageConfirmation } from './MessageConfirmation';
import { Loader } from './Loader';


export function Form() {

    const reForm = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [sending, setSending] = useState(false);

    const sendEmail = async (event) => {
        event.preventDefault();
        setSending(true);
        const serviceId = "service_a1b3thb";
        const templateId = "template_t2szbn8";
        const key = "iT8BqbWUbZqyQKCa9";
        try {
            await emailjs.sendForm(serviceId, templateId, reForm.current, key);
            setMessageSent(true);
        } catch (error) {
            console.log(error.text);
        } finally {
            setSending(false);
        }
    }
    return (
        <div className="cont-for">
            <form ref={reForm} onSubmit={sendEmail} className='forme'>
                <input type="text" name="name" placeholder="Nombre & Apellido" required />
                <input type="text" name="phone" placeholder=" Teléfono" pattern="[0-9]*" title="Por favor, ingrese solo números en el campo de teléfono" required />
                <input type="text" name="mail" placeholder="Correo Electronico (opcional)" />
                <input type="text" name="context" placeholder="Contexto" required />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Mensaje" required />
                <input type="submit" value="Enviar" className='btSend' />
            </form>
            {sending && <Loader />}
            {messageSent && <MessageConfirmation />}
        </div>
    )
}