import React from 'react';
import { connect } from 'react-redux';

import MenuItems from '../menu-item/MenuItems';

import './Directory.scss';

const Directory = ({ sections }) =>{

  const renderSections = () => {
        return sections.map(({ id, ...otherSectionProps }) => {
            return <MenuItems key={id} {...otherSectionProps} />
        })
    };
  return (
    <div className="directory-menu">
      {renderSections()}
    </div>
  );
};

const mapStateToProps = state => ({sections: state.directory.sections})

export default connect(mapStateToProps)(Directory);