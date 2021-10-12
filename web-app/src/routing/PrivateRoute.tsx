import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import LoadingContainer from '../containers/LoadingContainer';

export const PrivateRoute = (props: any) => {
    const RouteComponent = props.component
    const RouteProps = RouteComponent.props

    return <Route
        {...props.rest}
        component={(childProps: any) =>
            props.isUserAuthenticated ? (
                <Fragment>
                    {props.counter > 0 &&
                        <LoadingContainer />
                    }
                    <RouteComponent {...RouteProps} />
                </Fragment>

            ) : (
                    <Redirect to={props.redirectTo} />
                )
        }
    />
}

const mapStateToProps = (state: any) => ({
    isUserAuthenticated: state.authReducer.isUserAuthenticated,
    counter: state.loadingReducer.counter,
});


export default connect(mapStateToProps, null)(PrivateRoute);
