import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#000',
    marginTop: 80,
    marginBottom: 20,
  },
  verse: {
    color: '#777',
    fontSize: 18,
    fontFamily: 'serif',
    textAlign: 'justify',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  reference: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'serif',
    color: '#777',
    marginBottom: 40,
  },
  message: {
    fontSize: 20,
    fontFamily: 'serif',
    color: '#333',
    textAlign: 'justify',
    letterSpacing: 0.7,
    lineHeight: 25,
  },
  readButton: {
    width: '100%',
    backgroundColor: '#579ee6',
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    marginBottom: 60,
    elevation: 2,
  },
  readButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  pray: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'serif',
    color: '#333',
    textAlign: 'justify',
    letterSpacing: 0.7,
    lineHeight: 25,
    marginBottom: 30,
  }
})

export default styles