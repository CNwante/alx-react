import React, {Children, Component} from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.PropTypes = {
  title: PropTypes.string.isRequired,
  Children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
