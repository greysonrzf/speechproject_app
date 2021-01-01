import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

import * as Speech from 'expo-speech'

import api from '../../services/api'

import styles from './styles';

function Message() {
  const [message, setMessage] = useState({})
  const [readableMessage, setReadableMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/mensagemdia.json').then(response => {
      setMessage(response.data.resposta[0])

      setReadableMessage(`Título. ${response.data.resposta[0].titulo}. 
      Versículo. ${response.data.resposta[0].referencia}.

      ${response.data.resposta[0].versiculo}. 
      
      Mensagem. ${response.data.resposta[0].mensagem}.`)
      setLoading(false)
    })
  }, [])

  function speak() {
    Speech.speak(readableMessage, {
      language: 'pt-BR',
      voice: '_V'
    })

  }

  return (
    loading
      ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )
      : (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{message.titulo}</Text>
          <Text style={styles.verse}>{message.versiculo}</Text>
          <Text style={styles.reference}>{message.referencia}</Text>
          <Text style={styles.message}>{message.mensagem}</Text>
          <TouchableOpacity style={styles.readButton} onPress={speak}>
            <Text style={styles.readButtonText}>Read message</Text>
          </TouchableOpacity>
          <Text style={styles.pray}>Oração:</Text>
          <Text style={styles.pray}>{message.oracao}</Text>
          <View style={{ marginBottom: 60 }} />
        </ScrollView>
      )
  );
}

export default Message;