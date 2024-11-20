import {Keyboard, Pressable, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  conditionalCrossStyle,
  conditionalFilterStyles,
  styles,
} from './CharacterList.styled';
import CharacterFlatList from '../../../../components/CharacterFlatList/CharacterFlatList';
import Icon, {IconType} from '../../../../components/Icon/Icon';
import FilterModal from '../../../../components/FilterModal/FilterModal';
import {useCharacterList} from './hooks/ui/useCharacterList';
import {TabScreenProps} from '../../TabNavigation.routes';

export type CharacterListScreenProps = TabScreenProps;

const CharacterListScreen = ({route, navigation}: CharacterListScreenProps) => {
  const {
    charactersData,
    getMoreCharacters,
    isLoading,
    showCharacterDetails,
    likeCharacter,
    searchValue,
    setSearchValue,
    availableFilters,
    setSelected,
    selectedFilters,
    onResetPress,
    onApplyPress,
  } = useCharacterList({route, navigation});

  const [focus, setFocus] = useState(false);
  const [modal, setModal] = useState(false);
  const onChangeSearchValue = (text: string) => setSearchValue(text);
  const onTextFocus = () => {
    setFocus(true);
  };
  const onFilterPress = () => setModal(prev => !prev);
  const onResetPressHandle = () => {
    setModal(false);
    onResetPress();
  };

  const onApplyPressHandle = () => {
    setModal(false);
    onApplyPress();
  };

  const onCrossPress = () => {
    setSearchValue('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Characters</Text>
        <View style={styles.textRelative}>
          <TextInput
            onFocus={onTextFocus}
            onBlur={() => setFocus(false)}
            value={searchValue}
            onChangeText={onChangeSearchValue}
            placeholderTextColor={'#59695C'}
            style={styles.textInput}
            placeholder={focus ? undefined : 'Search the characters'}
            cursorColor={'#162C1B'}
          />
          <View style={styles.iconPosition}>
            <Icon
              icon={IconType.search}
              width={20}
              height={20}
              color="#162C1B"
            />
          </View>
          <Pressable
            onPress={onCrossPress}
            style={({pressed}) => [
              styles.crossPosition,
              conditionalCrossStyle(pressed).background,
            ]}>
            <Icon
              icon={IconType.cross}
              width={20}
              height={20}
              color="#162C1B"
            />
          </Pressable>
        </View>
        <Pressable
          onPress={onFilterPress}
          style={[
            styles.filterButton,
            conditionalFilterStyles(modal).background,
          ]}>
          <Text style={styles.filterText}>Filter</Text>
          <Icon
            icon={modal ? IconType.arrowUp : IconType.arrowDown}
            width={12}
            height={8}
          />
        </Pressable>
      </View>
      <CharacterFlatList
        data={charactersData}
        refresh={getMoreCharacters}
        isLoading={isLoading}
        showCharacterDetails={showCharacterDetails}
        likeCharacter={likeCharacter}
      />
      {modal && (
        <View style={styles.modalContainer}>
          <FilterModal
            availableFilters={availableFilters}
            setSelected={setSelected}
            selectedFilters={selectedFilters}
            onResetPress={onResetPressHandle}
            onApplyPress={onApplyPressHandle}
          />
        </View>
      )}
    </View>
  );
};

export default CharacterListScreen;
