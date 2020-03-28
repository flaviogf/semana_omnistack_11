import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as Mail from "expo-mail-composer";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

const useDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}"`;

  function navigateToBack() {
    navigation.goBack();
  }

  function sendMail() {
    Mail.composeAsync({
      subject: `Herói do caso "${incident.title}"`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }

  return {
    incident,
    navigateToBack,
    sendMail,
    sendWhatsApp
  };
};

function Detail() {
  const detail = useDetail();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={detail.navigateToBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentLabel, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{detail.incident.name}</Text>

        <Text style={styles.incidentLabel}>CASO:</Text>
        <Text style={styles.incidentValue}>{detail.incident.title}</Text>

        <Text style={styles.incidentLabel}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(detail.incident.value)}
        </Text>
      </View>

      <View style={styles.contact}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={detail.sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={detail.sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Detail;
