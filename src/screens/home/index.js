// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import imagePath from '../../constants/imagePath';
// import styles from './styles';
// import navigationstrings from '../../constants/navigationstrings';

import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import CategoryCard from '../../components/categoryContainer';
import styles from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import navigationstrings from '../../constants/navigationstrings';

const Home = ({navigation}) => {
  const [checkboxState, setCheckboxState] = React.useState(false);
  const taskItems = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
      },
  ];

  const ItemDivider = () => {
    return (
      <View
        style={{
            marginHorizontal: 30,
            height: 1,
            width: "80%",
            backgroundColor: "#607D8B",
            opacity: 0.2
        }}
      />
    );
  }

  return (
      <View style={styles.container}>
          <Text style={styles.headerTextStyle}>My To Do</Text>
          <TouchableOpacity style={styles.parentButtonViewStyles}>
                  <Text>Add Category</Text>
          </TouchableOpacity>
          <View style={styles.rowViewStyle}>
              <CategoryCard title='Category 1' />
              <CategoryCard title='Category 2' newstyle={{backgroundColor: '#F06E65'}}/>
          </View>
          <View style={styles.rowViewStyle}>
              <CategoryCard title='Category 3' newstyle={{backgroundColor: '#4CC8CC'}}/>
              <CategoryCard title='Category 4' newstyle={{backgroundColor: '#F0DC4D'}}/>
          </View>
          <View style={{height: 12}}/>
          <View style={styles.viewAllViewStyle}>
            <Text style={styles.listHeadingText}>TODAY</Text>
            <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.TODAYS_CALENDER)}>
              <Text style={styles.viewAllTextStyle}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listViewStyle}>
              <FlatList
              showsVerticalScrollIndicator={false}
              data={taskItems}
              ItemSeparatorComponent={ItemDivider}
              renderItem={(element) => {
                  return (
                      <BouncyCheckbox
                          size={25}
                          fillColor="#B4C7B3"
                          unfillColor="#E7EBF5"
                          text={element.item.title}
                          isChecked={checkboxState}
                          // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                          onPress={() => setCheckboxState(!checkboxState)}
                          style={styles.bouncyListStyles}
                          size={20}
                          textStyle={styles.listTextStyle}
                      />
                  )
              }}    
              />
          </View>
      </View>
  );
};

export default Home;
