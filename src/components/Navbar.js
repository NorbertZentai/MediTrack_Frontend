import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { theme } from "../theme";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <View style={styles.navbar}>
      <Link to="/" style={styles.link}>
        <Text style={styles.logo}>MediTrack Web</Text>
      </Link>
      <View style={styles.menu}>
        <Link to="/" style={styles.link}>
          <Text style={styles.linkText}>Főoldal</Text>
        </Link>
        <Link to="/medications" style={styles.link}>
          <Text style={styles.linkText}>Gyógyszerek</Text>
        </Link>
        <Link to="/search" style={styles.link}>
          <Text style={styles.linkText}>Keresés</Text>
        </Link>
        <Link to="/favorites" style={styles.link}>
          <Text style={styles.linkText}>Kedvencek</Text>
        </Link>
        <Link to="/statistics" style={styles.link}>
          <Text style={styles.linkText}>Statisztikák</Text>
        </Link>

        {user ? (
          <>
            <Link to="/user" style={styles.link}>
              <Text style={styles.linkText}>Profil</Text>
            </Link>
            <Text style={[styles.link, styles.logout]} onClick={handleLogout}>
            Kijelentkezés
            </Text>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              <Text style={styles.linkText}>Bejelentkezés</Text>
            </Link>
            <Link to="/register" style={styles.link}>
              <Text style={styles.linkText}>Regisztráció</Text>
            </Link>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%", // Teljes szélesség
    height: theme.dimensions.navbarHeight, // Fix magasság (ha van definiálva)
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary, // Navigációs sáv háttérszíne
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Árnyék a kiemeléshez (opcionális)
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  menu: {
    flexDirection: "row",
  },
  link: {
    marginLeft: 20,
    textDecorationLine: "none",
  },
  linkText: {
    color: theme.colors.white,
  },
  logout: {
    marginLeft: 20,
    cursor: "pointer",
  },
});
