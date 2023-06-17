import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className={styles.main}>About</div>
            <Link href='/' >Home</Link>
        </>
    )
}
