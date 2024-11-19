import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './FilterModal.styled';
import FilterModalSection from '../FilterModalSection/FilterModalSection';
import {FilterGroup, SelectedFilters} from '../../types';

interface IFilterModal {
  availableFilters: FilterGroup;
  setSelected: (filterName: string, filter: string) => void;
  selectedFilters: SelectedFilters;
  onResetPress: () => void;
  onApplyPress: () => void;
}

const FilterModal = ({
  availableFilters,
  setSelected,
  selectedFilters,
  onResetPress,
  onApplyPress,
}: IFilterModal) => {
  return (
    <View style={styles.relative}>
      <View style={styles.modalShadow} />
      <View style={styles.modalContent}>
        {Object.keys(availableFilters).map(el => (
          <FilterModalSection
            key={el}
            filterName={el}
            filters={availableFilters[el]}
            setSelected={setSelected}
            selected={selectedFilters[el]}
          />
        ))}
        <View style={styles.buttonRow}>
          <Pressable style={styles.resetButton} onPress={onResetPress}>
            <Text style={styles.resetText}>Reset</Text>
          </Pressable>
          <Pressable style={styles.applyButton} onPress={onApplyPress}>
            <Text style={styles.applyText}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FilterModal;
