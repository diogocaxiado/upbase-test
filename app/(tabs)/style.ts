import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 270,
    height: 250,
  },
  containerProduct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 4,
  },
  info: {
   
  },
  values: {
    flexDirection: 'column'
  },
  notes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 2,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 2,
  }
});
