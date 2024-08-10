import { Appbar } from "../components/Appbar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"

export const Dashboard = ()=>{
  // const balance = fetch("http://localhost:3000/api/v1/account/balance")
  return <>
  <Appbar label={"shivraj"}/>
  <Balance value={"10000"}/>
  <Users/>
  </>
}