const Context = React.createContext;

export class isClickedStore extends React.Component {
    constructor(props){
        super(props);
        this.state = { isClicked: false }
    }

    render() {
        return(
            <Context.Provider value={{...this.state}}>
               {this.props.children} 
            </Context.Provider>
        )
    }
}

export default Context;