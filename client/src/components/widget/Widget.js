import React from 'react'

const Widget = () => {
    return (
        <div className="widget">
            <div className='widget-left'>
                <p className='widget-title'>Title of widget</p>
                <p className='widget-number'>Number of widget</p>
                <p className='widget-link'>Link to another page</p>
            </div>
            <div className='widget-right'>
                <p className='widget-info'>Widget info</p>
                <p className='widget-alt'>Alt widget</p>
                <p className='widget-icon'>Icon</p>
            </div>
        </div>
    )
}

export default Widget
