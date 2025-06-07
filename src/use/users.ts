import {ref} from 'vue'
import type {Ref} from 'vue'
import {useFetch} from "./fetch.ts";

interface User {
    id: number;
    name: string;
    email: string;
}

type UsableUsers = Promise<{users: Ref<User[]> | undefined}>

export async function useUsers(): UsableUsers {
    const loading= ref<boolean>(false);
    const {response: users, request} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

    if (!loading.value) {
        await request()
        loading.value = true
    }
    return {users};
}