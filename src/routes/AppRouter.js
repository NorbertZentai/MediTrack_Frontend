import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import UserScreen from "../screens/UserScreen";
import MedicationScreen from "../screens/MedicationScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import StatisticScreen from "../screens/StatisticScreen";
import Navbar from "../components/Navbar";
import { theme } from "../theme";
import { AuthContext } from "../context/AuthContext";

export default function AppRouter() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#66BB6A" />
      </View>
    );
  }

  return (
    <Router>
      <View style={styles.container}>
        <View style={styles.navbarWrapper}>
          <Navbar />
        </View>

        <View style={styles.content}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/user" element={<UserScreen />} />
            <Route path="/medications" element={<MedicationScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/favorites" element={<FavoriteScreen />} />
            <Route path="/statistics" element={<StatisticScreen />} />
            <Route path="*" element={<h2>404 - A keresett oldal nem található.</h2>} />
          </Routes>
        </View>
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
  },
  navbarWrapper: {
    width: "100%", // Teljes szélesség
    height: theme.dimensions.navbarHeight, // Fix magasság megegyezik a Navbar magasságával
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
