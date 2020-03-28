import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";
import api from "../../services/api";
import styles from "./styles";

const useIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => getIncidents(), []);

  function getIncidents() {
    if (loading) {
      return;
    }

    if (count > 0 && incidents.length === count) {
      return;
    }

    setLoading(true);

    api
      .get("/incidents", { params: { page } })
      .then(response => {
        setIncidents([...incidents, ...response.data]);
        setCount(response.headers["x-total-count"]);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
        setPage(page + 1);
      });
  }

  function navigatoToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  return {
    count,
    incidents,
    getIncidents,
    navigatoToDetail
  };
};

function Incidents() {
  const incidents = useIncidents();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <Text style={styles.headerText}>
          Total de{" "}
          <Text style={styles.headerTextBold}>{incidents.count} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo</Text>

      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        data={incidents.incidents}
        onEndReached={incidents.getIncidents}
        onEndReachedThreshold={0.1}
        keyExtractor={it => String(it.id)}
        renderItem={({ item }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentLabel}>ONG:</Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentLabel}>CASO:</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentLabel}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => incidents.navigatoToDetail(item)}
            >
              <Text style={styles.buttonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={true}
        style={styles.incidentList}
      ></FlatList>
    </View>
  );
}

export default Incidents;
