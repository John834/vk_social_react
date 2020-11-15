import React from 'react'
const StoreContext = React.createContext(null)

const Provider = (props) => {
	debugger
	return <StoreContext.Provider value={store}>
	{props.chilren}
	</StoreContext.Provider>
}


export default StoreContext;