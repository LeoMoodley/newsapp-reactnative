import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const FavoritesScreen = (props) => {
  const favorites = useSelector((state) => state.news.favorites);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <Card
          navigation={props.navigation}
          title={item.title === null ? "" : item.title}
          image={item.urlToImage}
          description={item.description === null ? "" : item.description}
          url={item.url}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
