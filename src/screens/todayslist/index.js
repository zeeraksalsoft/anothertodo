import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationstrings from '../../constants/navigationstrings';
import { ProgressChart, LineChart } from "react-native-chart-kit";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '../../constants/colors';
import ScreenFormat from '../../components/screenFormat';

const TodaysList = ({navigation}) => {
  const screenWidth = Dimensions.get("window").width;
  const [checkboxState, setCheckboxState] = React.useState(false);
  const data = {
      labels: ["Work", "Home", "Fun"],
      data: [0.2, 0.5, 0.8]
  };
  const linedata = {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      
  };

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
      {
          id: "58694a0f-3da1-471f-bd96-145571e29d73",
          title: "Fourth Item",
      },
      {
          id: "58694a0f-3da1-471f-bd96-145571e29d74",
          title: "Fifth Item",
      },
      {
          id: "58694a0f-3da1-471f-bd96-145571e29d75",
          title: "Sixth Item",
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
    <ScreenFormat heading="Today's List">
      <ScrollView style={styles.baseViewStyle}>
        <LineChart
            data={linedata}
            width={screenWidth} // from react-native
            height={180}
            
            xAxisLabel='pm'
            withDots={false}
            withInnerLines={false}
            withOuterLines={false}
            withHorizontalLabels={false}
            chartConfig={styles.chartConfig}
            bezier
            style={{
                paddingRight: 50,
                marginBottom: 15
            }}
        />
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <ProgressChart
                data={data}
                width={screenWidth}
                height={130}
                hideLegend={false}
                strokeWidth={10}
                radius={30}
                chartConfig={{
                    backgroundColor: '#E7EBF5',
                    backgroundGradientFrom: '#E7EBF5',
                    backgroundGradientTo: '#E7EBF5',
                    //decimalPlaces: 2,
                    color: (opacity = 0.5) => `rgba(110, 0, 150, ${opacity})`,
                }}
                style= {{
                    borderRadius: 15,
                }}
            />
        </View>
        <View style={styles.listViewStyle}>
            {
                taskItems.map((object) => {
                return (
                    <BouncyCheckbox
                        key={object.id}
                        size={25}
                        fillColor="#B4C7B3"
                        unfillColor="#E7EBF5"
                        text={object.title}
                        isChecked={checkboxState}
                        // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={() => setCheckboxState(!checkboxState)}
                        style={styles.bouncyListStyles}
                        size={20}
                        textStyle={styles.listTextStyle}
                    />
                )
                })
            }
        </View>
      </ScrollView>
      <View style={{marginTop: 5, marginBottom: 8, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate(navigationstrings.CREATE_TASK)}>
              <View style={styles.addButtonStyle}>
                  <Text style={{color: '#1C39D4'}}>Add Subtrack</Text>
              </View>
          </TouchableOpacity>
      </View>
    </ScreenFormat>
  );
};

export default TodaysList;