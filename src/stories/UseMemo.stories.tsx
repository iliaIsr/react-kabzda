import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo"
}

export const DificultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])//пока не поменяется зависимость-делай!


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a:{resultA}
            </div>
            <div>
                Result for b:{resultB}
            </div>
        </>
    )

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)
export const HelpToReactMemo = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Valera, Dimych', 'Artem'])

    const newArray = useMemo(() => {
        console.log('New Array')
        const newArray = users.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]

        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'CSS', 'HTML', 'Figma'])
// 1 variant
    // const addBook=()=>{
    //     console.log('prorisovka addBook', books)
    //     const newBooks=[...books,'Angular' + new Date().getTime()]
    //     setBooks(newBooks)
    // }
    //
    // const memoizedAddBook=useMemo(()=>{
    //     return addBook
    // },[books])
// 2 variant
  //   const memoizedAddBook=useMemo(()=>{
  //       return ()=>{
  //           console.log('prorisovka addBook', books)
  //           const newBooks=[...books,'Angular' + new Date().getTime()]
  //           setBooks(newBooks)
  //       }
  //   },[books])
// 3 variant useCallback
    const memoizedAddBook = useCallback(() => {
        console.log('prorisovka addBook', books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}
type BookSecretType = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretType) => {
    console.log('books secret in React.memo')
    return <div>
        <button onClick={() => props.addBook()}>1add Book</button>
    </div>

}
const Book = React.memo(BooksSecret)