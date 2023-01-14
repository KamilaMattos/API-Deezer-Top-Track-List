import { createContext, useState } from "react"

export const TopMusicsContext = createContext()
//           TrendsContext 

const TrendsState = (props) => {
  const [trends, setTrends] = useState(null)

  return (
    <TopMusicsContext.Provider
      value={{
        trends,
        setTrends,
      }}
    >
      {props.children}
    </TopMusicsContext.Provider>
  )
}

export default TrendsState
