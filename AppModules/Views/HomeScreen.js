import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GET_API} from '../Redux/ActionsTypes';
import MemberCard from './Components/CardItem';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const data = useSelector(state => state.home.data);
    const fetchData = (pageNumber) => {
        if (loading || !hasMore) {return;} // Prevent multiple calls
        try {
            setLoading(true);
            dispatch({
                type: GET_API,
                payload: { page: pageNumber }, // Pass page number in the payload for pagination
            });
        } catch (e) {

        } finally {
            setLoading(false);
        }

    };
    useEffect(() => {
        fetchData(page);
    },[]);
    const renderItems = ({item,index}) => {
        return (
            <MemberCard
            name={item.name.first}
            age={item.dob.age}
            gender={item.gender}
            location={item.location.country}
            status={'Accepted'}
            item={item}
            imageUri={item.picture.thumbnail}
            />
        );
    };
    const renderFooter = () => {
        if (!loading) {return null;}
        return <ActivityIndicator style={{ marginVertical: 20 }} />;
    };
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item,index) => index.toString()}
                onEndReachedThreshold={0.1}
                onEndReached={() => fetchData(page)}
                ListFooterComponent={renderFooter}
                horizontal={false}
                style={{flex:1}} data={data}  renderItem={renderItems} />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,alignItems:'center',justifyContent:'center',
    },
});
export default React.memo(HomeScreen);
