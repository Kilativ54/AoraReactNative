import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUserPosts, searchPosts } from "../../lib/appwrite";
import { FlatList } from "react-native";
import VideoCard from "../../components/VideoCard";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../../components/EmptyState";

import SearchInput from "../../components/SearchInput";
import { useGlobalContext } from "../(auth)/contex/GlobalProvider";
const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View>
            
        </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found with that query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
