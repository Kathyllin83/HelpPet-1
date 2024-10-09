import styles from '../style/link_btn.module.css'

function LinkButton({ label, onClick }) {
    return (
        <div>
            <button 
                className={styles.linkButton} 
                aria-label={label} 
                onClick={onClick}
            >
                <b>{label}</b>
            </button>
        </div>
    )
}

export default LinkButton