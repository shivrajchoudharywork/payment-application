import { Appbar } from "../components/Appbar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"

export const Dashboard = ()=>{
  return <>
  <Appbar label={"shivraj"}/>
  <Balance value={"10000"}/>
  <Users />
  </>
}