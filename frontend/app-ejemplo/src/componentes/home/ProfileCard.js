import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitch = <Icon name={'twitch'} size={30} color={'purple'}/>
const youtube = <Icon name={'youtube-play'} size={30} color={'red'}/>
const telegram = <Icon name={'telegram'} size={30} color={'skyblue'}/>
const reddit = <Icon name={'reddit'} size={30} color={'orange'}/>
const whatsapp = <Icon name={'whatsapp'} size={30} color={'green'}/>
const camera = <Icon name={'camera'} size={30} color={'orange'}/>

const ProfileCard = () => {
    const user = {
        avatar: require('C:/Users/USRE/Desktop/DISPOSITIVOS MOVILES/mobil-2-main/frontend/app-ejemplo/assets/avatar2.jpg'),
        coverPhoto: "https://wallpapercave.com/wp/wp12678185.jpg",
        name: "Jairo Armijos"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>


                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.twitch.tv/')}>
                    <View style={styles.socialMediaContainer}>
                        {twitch}
                        <Text style={styles.socialMediaText}>Twitch</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.youtube.com/')}>
                    <View style={styles.socialMediaContainer}>
                        {youtube}
                        <Text style={styles.socialMediaText}>YouTube</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://web.telegram.org/k/')}>
                    <View style={styles.socialMediaContainer}>
                        {telegram}
                        <Text style={styles.socialMediaText}>Telegram</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.reddit.com/')}>
                    <View style={styles.socialMediaContainer}>
                        {reddit}
                        <Text style={styles.socialMediaText}>Reddit</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://web.whatsapp.com/')}>
                    <View style={styles.socialMediaContainer}>
                        {whatsapp}
                        <Text style={styles.socialMediaText}>WhatsApp</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.kwai.com/es')}>
                    <View style={styles.socialMediaContainer}>
                        {camera}
                        <Text style={styles.socialMediaText}>kwai</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: 'black'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    },

    socialMediaContainer: {
        alignItems: 'center',
    },
    socialMediaText: {
        marginTop: 5,
        fontWeight: 'bold',
    }
});
export default ProfileCard