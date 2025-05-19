import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/Firebase'

export const addUser = async (name, email) => {
  try {
    await addDoc(collection(db, "users"), {
      name,
      email,
    })
    console.log("User added to Firestore")
  } catch (error) {
    console.error("Error adding user:", error.message)
  }
}

export const fetchUsers = async () => {
  try {
    const usersCol = collection(db, "users")
    const snapshot = await getDocs(usersCol)
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.log(users)
    return users
  } catch (error) {
    console.error("Error fetching users:", error.message)
  }
}
