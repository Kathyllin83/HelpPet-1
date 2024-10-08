import styles from '../style/link_btn.module.css'

function LinkButton({ label }) {
    return (
        <div>
            <button className={styles.linkButton}>
                <b>{label}</b>
            </button>
        </div>
    )
}

export default LinkButton