import styles from './SectionWrap.module.css';
const SectionWrap = (props) => {
    return(
        <div className={`d-flex ${styles.sectionWrap}`}>
        {props.children}
        </div>
    )
}

export default SectionWrap;