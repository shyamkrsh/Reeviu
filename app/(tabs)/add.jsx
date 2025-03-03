import { 
  View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image 
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import axios from "axios";

const AddVideo = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

 
  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission is required to access media library!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  const pickThumbnail = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission is required to access media library!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setThumbnail(result.assets[0].uri);
    }
  };


  const handleSubmit = async () => {
    if (!video || !thumbnail || !videoTitle.trim() || !videoDescription.trim()) {
      alert("Please fill all fields and upload video & thumbnail!");
      return;
    }

    const formData = new FormData();
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);
    formData.append("video", {
      uri: video,
      type: "video/mp4",
      name: "video.mp4",
    });

    formData.append("thumbnail", {
      uri: thumbnail,
      type: "image/jpeg",
      name: "thumbnail.jpg",
    });
    try {
      const response = await axios.post("http://localhost:8080/api/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Upload Successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload Failed!");
    }

    console.log(video, thumbnail, videoTitle, videoDescription);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Upload Your Video</Text>

        {/* Upload Video Section */}
        <TouchableOpacity style={styles.uploadBox} onPress={pickVideo}>
          {video ? (
            <Video
              source={{ uri: video }}
              style={styles.videoPreview}
              useNativeControls
              resizeMode="contain"
              shouldPlay={false}
            />
          ) : (
            <>
              <Feather name="upload" size={40} color="#888" />
              <Text style={styles.uploadText}>Upload Video</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Upload Thumbnail Section */}
        <TouchableOpacity style={styles.uploadBox} onPress={pickThumbnail}>
          {thumbnail ? (
            <Image source={{ uri: thumbnail }} style={styles.thumbnailPreview} />
          ) : (
            <>
              <Ionicons name="images-outline" size={40} color="#888" />
              <Text style={styles.uploadText}>Upload Thumbnail</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Title Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter video title..."
          value={videoTitle}
          onChangeText={setVideoTitle}
          placeholderTextColor="#aaa"
        />

        {/* Description Input */}
        <TextInput
          style={[styles.input, styles.textarea]}
          multiline
          numberOfLines={4}
          placeholder="Write your video description..."
          value={videoDescription}
          onChangeText={setVideoDescription}
          placeholderTextColor="#aaa"
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },
  uploadBox: {
    width: "90%",
    height: 160,
    borderWidth: 2,
    borderColor: "#555",
    borderRadius: 12,
    borderStyle: "dashed",
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  uploadText: {
    color: "#aaa",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 10,
  },
  thumbnailPreview: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  videoPreview: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#333",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  textarea: {
    height: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    width: "90%",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
