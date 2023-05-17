interface ObjectConstructor {
    entries<T>(o: T): Array<[keyof T, T[keyof T]]>
}

//  Object.entries { id: 1, test: 2 } => [["id", 1], ["test", 2]]