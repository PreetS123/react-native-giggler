import { Dimensions, StyleSheet } from "react-native";

const screenWidth= Dimensions.get('window').width;

const homeStyles= StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    alignItems:'center'
  },
  main:{
    flex:1,
    alignItems:'center',
  },
  commonFlex:{
    flex:1
  },
  textCenter:{
    textAlign:'center'
  },
  profileImage:{
    width:screenWidth*0.5,
    height:screenWidth*0.5,
    borderRadius:screenWidth*0.25,
    marginBottom:16,
  },
  name:{
    fontSize:screenWidth > 375 ? 24 :20,
    fontWeight:'bold',
    marginBottom:8,
  },
  title:{
    fontSize: screenWidth > 375 ? 18 : 16,
    marginBottom:16,
  },
  summary:{
    textAlign:'center',
    marginBottom:16,
  },
  sectionHeader:{
    fontSize: screenWidth > 375 ? 18 :16,
    fontWeight:'bold',
    marginTop:16,
    marginBottom:8,
  },
  skillsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:16,
    alignItems:'center'
  },
  skillItem:{
    backgroundColor:'#eOeOeO',
    padding:8,
    margin:4,
    borderRadius:8,
  },
  experienceTitle:{
    fontSize: screenWidth >375 ? 16 : 14,
    fontWeight:'bold',
    marginBottom:4,
  },
  experienceItem:{
    marginBottom:16,
  },
  educationItem:{
    marginBottom:16,
  },
  educationDegree:{
    fontSize: screenWidth > 375 ? 16 : 12,
    fontWeight:'bold',
    marginBottom:4,
  }
})

export default homeStyles;