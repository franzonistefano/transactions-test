import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoadingContainer from '../containers/LoadingContainer';

export const PublicRoute = (props: any) => {
    const RouteComponent = props.component
    const RouteProps = RouteComponent.props
    return (
        <Fragment>
            {props.counter > 0 &&
                <LoadingContainer />
            }
            <Route
                {...props.rest}
                component={(childProps: any) =>
                    <RouteComponent {...RouteProps} />
                }
            />
        </Fragment>
    )
};

const mapStateToProps = (state: any) => ({
    counter: state.loadingReducer.counter,
});

export default connect(mapStateToProps, null)(PublicRoute);
