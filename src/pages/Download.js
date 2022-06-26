import { Box } from "@chakra-ui/react"
import { useContext } from "react";
import { ContextProvider } from "../context/Context";


const Download = () => {

  const {  state, dispatch } = useContext( ContextProvider )
  const { downLoadData } = state

  console.log("download", downLoadData)
  return (
    <Box>
        
    </Box>
  )
}

export default Download