import React, {useCallback, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Card, Avatar, Text, Button, MD2Colors} from 'react-native-paper';
const width = Dimensions.get('window').width;
const MemberCard = ({ name, age, gender, location, status, imageUri, item }) => {
    const [memberStatus, setMemberStatus] = useState(status); // Local state to handle status change
    const toggleStatus = useCallback(() => {
        const newStatus = memberStatus === 'Accepted' ? 'Declined' : 'Accepted';
        setMemberStatus(newStatus); // Update the local state

        // Optional: Save the new status in global state or backend via dispatch
        // dispatch({
        //   type: 'UPDATE_MEMBER_STATUS',
        //   payload: { memberId: item.id, newStatus },
        // });
    },[memberStatus]);
    return (
        <Card style={styles.card}>
            <Card.Content style={styles.content}>
                <Avatar.Image size={80} source={{ uri: imageUri }} style={styles.avatar} />

                <Text style={styles.name}>{item.name.title} {name} {item.name.last}</Text>

                <Text style={styles.details}>{age}, {gender}</Text>
                <Text style={styles.details}>{item.location.state},{location}</Text>
                <Button
                    mode="contained"
                    style={[
                        styles.statusButton,
                        memberStatus === 'Accepted' ? styles.acceptedButton : styles.declinedButton,
                    ]}
                    onPress={() => toggleStatus()}
                >
                    {memberStatus === 'Accepted' ? 'Member Accepted' : 'Member Declined'}
                </Button>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderRadius: 10,
        width: width * 0.7, // Adjust based on your layout
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        elevation: 2,
    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: MD2Colors.red600,
        textAlign: 'center',
    },
    details: {
        fontSize: 15,
        color: MD2Colors.black,
        textAlign: 'center',
        marginVertical: 5,
        fontWeight:'500',
    },
    statusButton: {
        marginTop: 10,
        borderRadius: 5,
    },
    acceptedButton: {
        backgroundColor: '#2ecc71',
    },
    declinedButton: {
        backgroundColor: '#e74c3c',
    },
});

export default MemberCard;
