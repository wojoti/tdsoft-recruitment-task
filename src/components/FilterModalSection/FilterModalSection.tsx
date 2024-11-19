import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './FilterModalSection.styled';
import CheckBox from '../CheckBox/CheckBox';

interface IFilterModalSection {
  filterName: string;
  filters: string[];
  setSelected: (filterName: string, filter: string) => void;
  selected: string;
}

const FilterModalSection = ({
  filterName,
  filters,
  setSelected,
  selected,
}: IFilterModalSection) => {
  const handleNewValue = (filter: string) => {
    setSelected(filterName, filter);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{filterName}</Text>
      {filters.map(el => {
        const onValueChange = () => handleNewValue(el);
        return (
          <View key={`${filterName}=${el}`} style={styles.row}>
            <CheckBox value={selected === el} onPress={onValueChange} />
            <Text style={styles.text}>{el}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default FilterModalSection;
