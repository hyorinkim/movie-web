import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({text}){
     return <button className={styles.btn}> {text}</button>//브라우저 에서 확인해보면 className이 랜덤하게 주어짐
}

Button.propTypes={
    text:PropTypes.string.isRequired,

}

export default Button;