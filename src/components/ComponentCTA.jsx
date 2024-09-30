import { useRef, useState } from "react";
import styles from "../styles/ComponentCTA.module.scss";

export const ComponentCTA = () => {
    const emailInp = useRef(null);
    const [send, setSend] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        const regex = new RegExp(/[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-zA-Z\d]{2,}/);

        if (emailInp.current.value.length === 0) {
            setIsValid(true);
            return;
        }

        if (!regex.test(emailInp.current.value.trim())) {
            setIsValid(true);
            return;
        }

        setSend(true);
        setIsValid(false);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Stay in touch</h2>
            <div className={styles.txtCTA}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id, iure consectetur et error hic!
            </div>
            {!send ?
                <form className={styles.form}>
                    <input type="email" defaultValue='' ref={emailInp} className={styles.email} placeholder="Enter your email"/>
                    {
                        isValid &&
                        <span className={styles.errorEmail}>Email is invalid. Please try example@example.com</span>
                    }
                    <button type="submit" className={styles.submit} onClick={submitHandler}>Subscribe</button>
                </form> :
                <div className={styles.subscribe}>Thank You for subscribe!</div>
            }
        </div>
    );
}