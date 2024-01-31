import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
      },
      modalTitle: {
        fontSize: 18,
        marginBottom: 10,
      },
      modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      modalOptionText: {
        marginRight: 10,
      },
      modalCloseButton: {
        marginTop: 20,
      },
      
})