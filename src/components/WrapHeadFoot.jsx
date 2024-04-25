import styles from './WrapHeadFoot.module.css';
const WrapHeadFoot = (props) => {
    return(
        <div className={`d-flex flex-column ${styles.wrapHeadFoot}`}>
        {props.children}
        </div>
    )
}

export default WrapHeadFoot;