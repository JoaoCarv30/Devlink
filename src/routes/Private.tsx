import { auth } from "../services/firebaseConnections";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loading } from "../components/loading";

interface PrivateProps {
    children: ReactNode;
}

export function Private ({children} : PrivateProps) : any {


    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)


    useEffect(() => {


        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User is signed in")
                const userData  = {
                    uid: user?.uid,
                    email: user?.email,
                }

                localStorage.setItem("@reactlinks", JSON.stringify(userData))
                setSigned(true);
                setLoading(false);


            } else {
                console.log("User is signed out")
                setLoading(false);
                setSigned(false);
            }
        })

        return () => {
            unsub();
        }

    },[])

    if (loading) {
        return <Loading />
    }

    if (!signed) {
        return <Navigate to="/login" />
    }

    return (
            children
    )



}