import log from 'loglevel';
import { Button } from 'primereact/button';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';


const NotFoundComponent = (props: any) => {
    log.debug(props)
    return (
        <div id='Login' className="background-primary" >
            <div className="container custom-container" >
                <div className='row full-height justify-content-center align-items-center' >

                    <div className='col-sm-6 col-xs-10 justify-content-center text-center' >
                        <div className="card p-5" >
                            <h1>
                                <FormattedMessage id={props.idTitle} />
                            </h1>
                            <Button onClick={props.onClick}> CLICCA </Button>
                            <p>
                                <FormattedMessage id={props.idContent} />
                                <Link to={props.linkTo} > <FormattedMessage id={props.idLink} /> </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default injectIntl(NotFoundComponent)