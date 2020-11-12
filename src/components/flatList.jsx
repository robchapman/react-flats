import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const {
    flats,
    selectFlat
  } = props;
  const renderList = () => {
    return flats.map((flat, index) => (
      <Flat
        selected={flat.name === props.selectedFlat.name}
        selectFlat={selectFlat}
        index={index}
        flat={flat}
        key={flat.lat}
      />
    ));
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
