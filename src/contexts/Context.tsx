import { createContext } from "react";

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: "Carlos",
    age: 25,
}

export const Context = createContext<ContextType>(initialState);

type Props = {
    children: React.ReactNode;
}

export const ContextProvider= ( {children}:Props ) => {
    return(
        <Context.Provider value={initialState}>
                {children}
        </Context.Provider>
    )
}