import { useState } from 'react';
import { decode } from 'html-entities';
import {  Image } from 'theme-ui';

import {
    Button,
    Label,
} from 'theme-ui/node_modules/@theme-ui/components';

import pancake from 'assets/images/pancake.svg'
import poocoin from 'assets/images/poocoin.svg'
import telegram from 'assets/images/telegram.png'
import { Link } from 'react-scroll';

const NewsletterForm = ({ status, message, onValidated }) => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = () => {

        setError(null);

        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    }

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%", flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <a href="https://pancakeswap.finance/swap" target={"_blank"}><Image src={pancake} alt="pancakeswap" style={{width: '40px'}} /></a>
                <a target={"_blank"} href="https://poocoin.app/"><Image src={poocoin} alt="pancakeswap" style={{width: '40px'}} href="https://poocoin.app/"/></a>
                <a href="https://t.me/spoodermanbsc" target={"_blank"}><Image  src={telegram} alt="telegram" style={{width: '50px'}} /></a>
                </div>
            </div>
            <div className="newsletter-form-info" style={{ paddingTop: "20px" }}>
                {status === "sending" && <div>Sending...</div>}
                {status === "error" || error ? (
                    <div
                        className="newsletter-form-error"
                        dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                    />
                ) : null}
                {status === "success" && status !== "error" && !error && (
                    <p>Thank you for Requesting a demo. We'll get back shortly.</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    chimpInput: {
        mr: ['15px'],
        minHeight: ['45px', null, null, 60, 50, null, 60],
    },
    chimpButton: {

    }
}

export default NewsletterForm