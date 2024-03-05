import css from './Contact.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
    <li className={css.item}>
      <div className={css.textWrap}>
        <p className={css.itemText}>
          <IoPerson />  Contact Contact
        </p>
        <p className={css.itemText}>
          <FaPhone /> 123-45-67
        </p>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} type="button">Delete</button>
      </div>
    </li>
    <li className={css.item}>
      <div className={css.textWrap}>
        <p className={css.itemText}>
          <IoPerson />  Contact Contact
        </p>
        <p className={css.itemText}>
          <FaPhone /> 123-45-67
        </p>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} type="button">Delete</button>
      </div>
    </li>
    <li className={css.item}>
      <div className={css.textWrap}>
        <p className={css.itemText}>
          <IoPerson />  Contact Contact
        </p>
        <p className={css.itemText}>
          <FaPhone /> 123-45-67
        </p>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} type="button">Delete</button>
      </div>
    </li>
    <li className={css.item}>
      <div className={css.textWrap}>
        <p className={css.itemText}>
          <IoPerson />  Contact Contact
        </p>
        <p className={css.itemText}>
          <FaPhone /> 123-45-67
        </p>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} type="button">Delete</button>
      </div>
    </li>
    </>
  )
}

export default Contact