import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/features/user/userSlice'

const GoogleAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleGoogleAuth = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)
            const response = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await response.json()
            dispatch(signInSuccess(data))
            navigate("/")
            
        } catch (err) {
            console.log('Could not login with Google', err)
        }
    }
  return (
    <button type='button' onClick={handleGoogleAuth} className="bg-red-600 text-white p-3 rounded-lg text-center uppercase hover:opacity-90">Continue with Google</button>
  )
}

export default GoogleAuth