type TObject<T=any> = {
    [key in T] : T[key]
}


type TResponseAPI = TObject


