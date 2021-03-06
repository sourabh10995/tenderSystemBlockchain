/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:27 GMT+0530 (IST)
 * @file: TenderContainer.js
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Introduction container is responsible for displaying Introduction pages and
 * displayed on intro route of the application
 *
 **/

import React from 'react';
import { connect } from 'react-redux';
import { moveToDashboardScreen } from 'actions/init';
import TenderComponent from 'components/tenderComponent';

class TenderContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<TenderComponent />
			</div>
		);
	}
}

TenderContainer.propTypes = {};

TenderContainer.defaultProps = {};

const mapStateToProps = (state) => ({ ...(state.toJS()) });

const mapDispatchToProps = (dispatch) => ({
	moveToDashboard: () => {
		dispatch(moveToDashboardScreen());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(TenderContainer);
