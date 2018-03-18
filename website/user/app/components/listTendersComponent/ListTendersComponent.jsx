/**
 * @author: dharmik
 * @since: Sun Mar 18 2018 16:51:20 GMT+0530 (India Standard Time)
 * @file: ListTendersComponent.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * FILE DESCRIPTION
 *
 **/

import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import TenderCard from 'components/tenderCard';

import styles from './listtenderscomponent.sass';

@CSSModules(styles, { allowMultiple: true })
class ListTendersComponent extends React.Component {

	renderExistingTendersCards = () => {
		const tendersList = Object.values(this.props.tenders);
		return tendersList.map((tender) => {
			console.log('azdasdasd', tender, tender.id, tender.name);
			return (<TenderCard
				key={tender.id}
				id={tender.id}
				name={tender.name}
				updateRouteOnTenderCardClick={this.props.updateRouteOnTenderCardClick}
			/>);
		});
	}

	renderCreateTenderCard = () => (
		<TenderCard
			id={-1}
			name="Create Tender"
			updateRouteOnTenderCardClick={this.props.updateRouteOnTenderCardClick}
		/>
	)

	renderTenderCards = () => (
		<div styleName="tender-cards-container">
			{this.renderCreateTenderCard()}
			{this.renderExistingTendersCards()}
		</div>
	)

	render() {
		return (
			<div styleName="listtenderscomponent-component">
				{this.renderTenderCards()}
			</div>
		);
	}
}

ListTendersComponent.propTypes = {
	tenders: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]),
	updateRouteOnTenderCardClick: PropTypes.func.isRequired
};
ListTendersComponent.defaultProps = {};

export default ListTendersComponent;