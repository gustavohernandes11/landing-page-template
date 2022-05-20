import React from 'react'
import styles from '../../../styles/OurServicesContainer.module.css'

export default function ServiceCard(props){
    return (
        <div className={styles.servicecard}>
            <p>{props.icon}</p>
            <p>{props.content ? props.content : 'lorem ipsum'}</p>
        </div>
    )
}