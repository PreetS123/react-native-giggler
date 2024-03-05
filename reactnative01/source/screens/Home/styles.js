import { StyleSheet } from "react-native";

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
  textCenter:{
    textAlign:'center'
  },
  profileImage:{
    width:150,
    height:150,
    borderRadius:75,
    marginBottom:16,
  },
  name:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:8,
  },
  title:{
    fontSize:18,
    marginBottom:16,
  },
  summary:{
    textAlign:'center',
    marginBottom:16,
  },
  sectionHeader:{
    fontSize:18,
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
  }
})

export default homeStyles;