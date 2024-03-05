import { View, Text, Button, Alert, Image, ScrollView } from 'react-native'
import React from 'react';
import homeStyles from './styles';

export default function HomeScreen({route}) {

  const resumeData = {
    name: 'John Doe',
    title: 'Software Developer',
    summary: 'Experienced software developer with a passion for creating innovative and efficient solutions.',
    skills: ['JavaScript', 'React Native', 'Node.js', 'HTML', 'CSS'],
    experience: [
      {
        title: 'Senior Developer',
        company: 'Tech Co.',
        year: '2018 - Present',
      },
      {
        title: 'Junior Developer',
        company: 'Dev Corp.',
        year: '2016 - 2018',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University XYZ',
        year: '2016',
      },
    ],
  };
  
  return (
    <View style={homeStyles.container}>
      <Text style={{fontSize:20}}>Welcome {route.params.email}</Text>

      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={homeStyles.main}>
      <Image source={{
        uri:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Portrait_placeholder.png/320px-Portrait_placeholder.png'
      }}  style={homeStyles.profileImage} />
      <Text style={homeStyles.name}>{resumeData.name}</Text>
      <Text style={homeStyles.title}>{resumeData.title}</Text>
      <Text style={homeStyles.summary}>{resumeData.summary}</Text>
      <View>
      <Text style={[homeStyles.sectionHeader,homeStyles.textCenter]}>Skills</Text>
      <View style={homeStyles.skillsContainer}>
      {
        resumeData.skills.map((el,i)=>(
          <Text style={homeStyles.skillItem} key={i}>{el}</Text>
        ))
      }
      </View>
      </View>
       
      <View>
      <Text style={[homeStyles.sectionHeader,homeStyles.textCenter]}>Experience</Text>
      {
        resumeData.experience.map((el,i)=>(
          <View key={i} style={homeStyles.experienceItem}>
          <Text style={homeStyles.experienceTitle}>{el.title}</Text>
          <Text style={homeStyles.textCenter}>{el.company}</Text>
          <Text style={homeStyles.textCenter}>({el.year})</Text>
          </View>
        ))
      }
      </View>

      <View>
      <Text style={[homeStyles.sectionHeader,homeStyles.textCenter]}>Education</Text>
      {resumeData.education.map((el,i)=>(
        <View key={i} style={homeStyles.educationItem}>
        <Text style={homeStyles.educationDegree}>{el.degree}</Text>
        <Text style={homeStyles.textCenter}>{el.school}</Text>
        <Text style={homeStyles.textCenter}>{el.year}</Text>
        </View>
      ))}
      </View>

      </View>
      </ScrollView>
      
      </View>
  )
}