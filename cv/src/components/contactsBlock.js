import { useEffect, useContext } from 'react';
import { Context } from '../index';
import { startPos } from './scaleBlock';
import './contactsBlock.css';

const ContactsBlock = ({ page }) => {
    const { cv } = useContext(Context);
    useEffect(() => {
        startPos('block__contacts');
    }, []);
    return (
        <ul className={`block__contacts ${page}`}>
            {
                cv.contacts.map(contact => {
                    return (
                        <li className={`block__contacts__contact ${page}`} key={contact.id}>
                            <h3><a className="contact__link" href={contact.link}>{contact.title}</a></h3>
                            <span className={`contact__span ${page}`}></span>

                        </li>
                    )
                })
            }

        </ul>
    )
};
export default ContactsBlock;