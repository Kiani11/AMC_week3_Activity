import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const imageFlexDirect = () => {
  const [name, onChangeName] = React.useState();
  const [age, onChangeAge] = React.useState();
  const [address, onChangeAddress] = React.useState();
  const [school, onChangeSchool] = React.useState();
  const [course, onChangeCourse] = React.useState();
  const [email, onChangeEmail] = React.useState();
  const [comment, onChangeComment] = React.useState();
  const [aboutMe, onChangeAboutMe] = React.useState();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://cdn.tuoitre.vn/zoom/700_700/1200/900/ttc/r/2021/02/27/con-gai-mr-bean-1614396029-1x1.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://staticg.sportskeeda.com/editor/2023/09/ad4e3-16941755297897-1920.jpg?w=640')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-4.1.0&rect=638%2C2%2C795%2C745&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://wallpapers.com/images/featured/goku-background-vhm3f71ddueli0kl.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
          source={('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoj3ouWokWT-R-wfKJ-I0SCSnEoJ_ToKSlA&s')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source ={ ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOutvcgeEnnldP4TRJf03KeMEsYQIyYeajgg&s')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://images.preview.ph/preview/resize/images/2024/09/09/bela-by-bela-1725873334-1-1725875868.webp')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://asianjournal.com/wp-content/uploads/2022/10/ferdie1bea.jpg')}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default imageFlexDirect;