<template>
    <div class="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div class="w-full flex items-center justify-center gap-10">
            <div
                class="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
                @click="handleGoogle"
            >
                <img class="w-8" src="../assets/googleLogo.png" alt="" />
                <span class="text-sm text-gray-500">Sign up with google</span>
            </div>
            <button
                class="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
                @click="handleSignOut"
            >
                Sign Out
            </button>
        </div>

        <div class="w-full flex items-center justify-center gap-10">
            <div
                class="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
            >
                <img class="w-8" src="../assets/githubLogo.png" alt="" />
                <span class="text-sm text-gray-500">Sign up with github</span>
            </div>
            <button
                class="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
            >
                Sign Out
            </button>
        </div>
    </div>
</template>

<script>
import { getAdapter } from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useStore } from 'vuex'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth'

import { db } from '../firebase/fireconfige'
db
import { useRouter } from 'vue-router'
export default {
    name: 'Login',
    setup() {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        const store = useStore()
        const router = useRouter()

        const handleGoogle = async () => {
            await signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user
                    store.commit('addUser', {
                        _id: user.displayName,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    })
                    router.push({ name: 'home' })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        const handleSignOut = () => {
            signOut(auth).then(() => {
                store.commit('removeUser')
                toast.success('Log Out Succesfully', {
                    autoClose: 1000,
                })
                router.push({ name: 'home' })
            })
        }
        return { handleGoogle, handleSignOut }
    },
}
</script>

<style></style>
