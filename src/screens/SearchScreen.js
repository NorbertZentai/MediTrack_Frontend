import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Ide kerül majd a keresési funkció.
    console.log("Keresési lekérdezés:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kereső modul</Text>
      <Text style={styles.description}>
        Itt történik a gyógyszerek keresése kulcsszavak alapján.
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Keresés..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Keresés</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>Eredmények itt fognak megjelenni.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    width: "100%",
    maxWidth: 400,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  infoText: {
    marginTop: 16,
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});
