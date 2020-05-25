import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Untitled() {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <View style={styles.iconRow}>
              <FeatherIcon name="menu" style={styles.icon} />
              <IoniconsIcon name="ios-notifications" style={styles.icon3} />
            </View>
          </View>
          <Image
            source={require("../assets/images/solvento-arealogo2.png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          />
        </View>
        <View style={styles.group}>
          <View style={styles.rect2}>
            <View style={styles.buenDiaStackRow}>
              <View style={styles.buenDiaStack}>
                <Text style={styles.buenDia}>¡Buen Dia!</Text>
                <Text style={styles.pedro}>Pedro</Text>
              </View>
              <FeatherIcon name="user" style={styles.icon2} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.salarioAcomulado3Row}>
            <Text style={styles.salarioAcomulado3}>Salario acomulado</Text>
            <View style={styles.rect4} />
            <Text style={styles.loremIpsum}>$4,000</Text>
          </View>
        </View>
        <View style={styles.rect14}>
          <View style={styles.puedesRetirar5Row}>
            <Text style={styles.puedesRetirar5}>Puedes retirar</Text>
            <View style={styles.rect15} />
            <Text style={styles.text8}>$2,000</Text>
          </View>
        </View>
        <View style={styles.rect17}>
          <View style={styles.diasALaNominaRow}>
            <Text style={styles.diasALaNomina}>Dias a la nomina</Text>
            <View style={styles.rect18} />
            <Text style={styles.text11}>5</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect6}>
        <Text style={styles.loremIpsum2}>¿Cuánto quieres retirar?</Text>
        <View style={styles.rect7StackStack}>
          <View style={styles.rect7Stack}>
            <View style={styles.rect7}>
              <View style={styles.loremIpsum4Row}>
                <Text style={styles.loremIpsum4}>1,700</Text>
                <EntypoIcon name="keyboard" style={styles.icon5} />
              </View>
            </View>
            <MaterialCommunityIconsIcon
              name="currency-usd"
              style={styles.icon4}
            />
          </View>
          <View style={styles.rect8} />
        </View>
        <View style={styles.rect9StackStack}>
          <View style={styles.rect9Stack}>
            <View style={styles.rect9} />
            <View style={styles.rect10} />
            <Svg viewBox="0 0 18.23 18.23" style={styles.ellipse}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(74,144,226,1)"
                stroke="rgba(230, 230, 230,1)"
                cx={9}
                cy={9}
                rx={9}
                ry={9}
              />
            </Svg>
          </View>
          <Text style={styles.text3}>$500</Text>
          <Text style={styles.text4}>$2,000</Text>
        </View>
      </View>
      <View style={styles.rect11}>
        <View style={styles.icon6Row}>
          <FontAwesomeIcon name="money" style={styles.icon6} />
          <Text style={styles.retirar}>Retirar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 34,
    left: 0,
    width: 329,
    height: 54,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 11,
    flexDirection: "row"
  },
  icon: {
    color: "grey",
    fontSize: 40,
    height: 40,
    width: 40
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 25,
    marginLeft: 230
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 14,
    marginTop: 7
  },
  image2: {
    top: 0,
    left: 107,
    width: 131,
    height: 131,
    position: "absolute"
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 329,
    height: 131,
    position: "absolute"
  },
  group: {
    top: 98,
    left: 0,
    width: 329,
    height: 90,
    position: "absolute"
  },
  rect2: {
    width: 329,
    height: 93,
    backgroundColor: "rgba(39,213,246,1)",
    borderRadius: 20,
    flexDirection: "row"
  },
  buenDia: {
    top: 0,
    left: 0,
    width: 108,
    height: 21,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "georgia-regular"
  },
  pedro: {
    top: 21,
    left: 20,
    width: 93,
    height: 26,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 29,
    fontFamily: "arial-regular"
  },
  buenDiaStack: {
    width: 113,
    height: 47
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 142
  },
  buenDiaStackRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 17,
    marginTop: 25
  },
  rectStackStack: {
    width: 329,
    height: 188,
    marginTop: -15,
    marginLeft: 15
  },
  rect3: {
    top: 0,
    left: 0,
    width: 329,
    height: 56,
    backgroundColor: "rgba(0,172,240,1)",
    position: "absolute",
    borderRadius: 19,
    flexDirection: "row"
  },
  salarioAcomulado3: {
    width: 192,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "amiko-regular",
    marginTop: 12
  },
  rect4: {
    width: 1,
    height: 41,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 9
  },
  loremIpsum: {
    width: 73,
    height: 16,
    color: "rgba(255,251,251,1)",
    fontSize: 20,
    fontFamily: "amiko-regular",
    marginLeft: 25,
    marginTop: 12
  },
  salarioAcomulado3Row: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 20,
    marginTop: 8
  },
  rect14: {
    top: 56,
    left: 1,
    width: 329,
    height: 56,
    backgroundColor: "rgba(0,172,240,1)",
    position: "absolute",
    borderRadius: 19,
    flexDirection: "row"
  },
  puedesRetirar5: {
    width: 156,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "amiko-regular",
    marginTop: 13
  },
  rect15: {
    width: 1,
    height: 41,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 46
  },
  text8: {
    width: 73,
    height: 16,
    color: "rgba(255,251,251,1)",
    fontSize: 20,
    fontFamily: "amiko-regular",
    marginLeft: 27,
    marginTop: 13
  },
  puedesRetirar5Row: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 18,
    marginTop: 7
  },
  rect17: {
    top: 112,
    left: 0,
    width: 329,
    height: 56,
    backgroundColor: "rgba(0,172,240,1)",
    position: "absolute",
    borderRadius: 19,
    flexDirection: "row"
  },
  diasALaNomina: {
    width: 190,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "amiko-regular",
    marginTop: 12
  },
  rect18: {
    width: 1,
    height: 41,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 11
  },
  text11: {
    width: 29,
    height: 16,
    color: "rgba(255,251,251,1)",
    fontSize: 20,
    fontFamily: "amiko-regular",
    marginLeft: 28,
    marginTop: 12
  },
  diasALaNominaRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 51,
    marginLeft: 19,
    marginTop: 8
  },
  rect3Stack: {
    width: 330,
    height: 168,
    marginTop: 13,
    marginLeft: 15
  },
  rect6: {
    width: 329,
    height: 184,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 11,
    marginTop: 16,
    marginLeft: 15
  },
  loremIpsum2: {
    width: 224,
    height: 23,
    color: "rgba(53,79,90,1)",
    fontSize: 14,
    fontFamily: "amiko-regular",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 54
  },
  rect7: {
    top: 0,
    left: 40,
    width: 224,
    height: 57,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 11,
    flexDirection: "row"
  },
  loremIpsum4: {
    width: 151,
    height: 24,
    color: "rgba(53,79,90,1)",
    fontSize: 37,
    fontFamily: "amiko-regular",
    textAlign: "center",
    marginTop: 7
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 8
  },
  loremIpsum4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 18,
    marginTop: 9
  },
  icon4: {
    top: 9,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 40
  },
  rect7Stack: {
    top: 0,
    left: 0,
    width: 264,
    height: 57,
    position: "absolute"
  },
  rect8: {
    top: 0,
    left: 2,
    width: 33,
    height: 57,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 11,
    borderColor: "rgba(183,54,54,1)",
    borderWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  rect7StackStack: {
    width: 264,
    height: 57,
    marginTop: 13,
    marginLeft: 34
  },
  rect9: {
    top: 9,
    left: 182,
    width: 70,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  rect10: {
    top: 9,
    left: 0,
    width: 183,
    height: 2,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute"
  },
  ellipse: {
    top: 0,
    left: 178,
    width: 18,
    height: 18,
    position: "absolute"
  },
  rect9Stack: {
    top: 0,
    left: 18,
    width: 252,
    height: 18,
    position: "absolute"
  },
  text3: {
    top: 18,
    left: 0,
    width: 50,
    height: 23,
    color: "rgba(53,79,90,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "amiko-regular",
    textAlign: "center"
  },
  text4: {
    top: 18,
    left: 224,
    width: 86,
    height: 23,
    color: "rgba(53,79,90,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "amiko-regular",
    textAlign: "center"
  },
  rect9StackStack: {
    width: 310,
    height: 41,
    marginTop: 25,
    marginLeft: 16
  },
  rect11: {
    width: 138,
    height: 56,
    backgroundColor: "rgba(0,172,240,1)",
    borderRadius: 19,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 114
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    height: 24,
    width: 26
  },
  retirar: {
    width: 44,
    height: 12,
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    marginLeft: 14,
    marginTop: 6
  },
  icon6Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 28,
    marginLeft: 26,
    marginTop: 16
  }
});

export default Untitled;
