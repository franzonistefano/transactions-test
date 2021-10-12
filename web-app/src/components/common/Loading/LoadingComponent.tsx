import React from 'react'
import './LoadingComponent.scss'
import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingComponent = (props: any) => {
    return (
        <div id='Loading'>
            <ProgressSpinner strokeWidth="4" animationDuration=".5s"/>
            <p className='strong'>Loading...</p>
        </div>
    )
}

export default LoadingComponent