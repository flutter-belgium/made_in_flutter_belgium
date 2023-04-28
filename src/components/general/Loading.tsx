import React from 'react'
import styles from '@/styles/components/general/Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.loadingTriangles}>
            <div className={styles.triangle}></div>
      </div>
    )
}

export default Loading