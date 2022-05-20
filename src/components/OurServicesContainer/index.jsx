import React from 'react'
import styles from '../../../styles/OurServicesContainer.module.css'
import ServiceCard from './ServiceCard'
import RatingCard from './RatingCard'


export default function OurServicesContainer(){
    return (
        <div className={styles.container}>
            <h1>Our Services</h1>
            <p>Lorem ipsum dooor sit ametm contanted</p>
            <div className={styles.servicecontainer}>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <div className={styles.ratingcontainer}>
            <RatingCard icon="" title="12+" subtitle="Years of experience" />
            <RatingCard icon="&" title="999+" subtitle="Completed projects" />
            <RatingCard icon="%" title="480+" subtitle="Total Clients" />
            <RatingCard icon="$" title="15+" subtitle="Award Won" />
            </div>
            
            
        </div>
    )
}