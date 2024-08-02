import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from '../../constants'
import { Image } from "react-native";
import FormField from "../../components/FormField";
import { useState } from 'react' 

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
})

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="h-full w-full justify-center px-4 my-6">
<Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
          
          <FormField title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
